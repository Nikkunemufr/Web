function generateDeathCount(data, time) {
    d3.select("#deathCount").html("");
    var margin = {top: 20, right: 200, bottom: 35, left: 60};

    var width = 860 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    data.sort(function (x, y) {
        return d3.descending(x.player_UUID, y.player_UUID);
    })
// append the svg object to the body of the page
    var svg = d3.select("#deathCount")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis
    var x = d3.scaleLinear()
        .domain([0, time])
        .range([0, width]);
    var xAxis = svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    var groups = d3.map(data, function (d) {
        return (d.player_name)
    }).keys()
    // Add Y axis
    var y = d3.scaleBand()
        .domain(groups)
        .range([height, 0])
        .padding([0.2]);

    svg.append("g")
        .call(d3.axisLeft(y));

    // Add a clipPath: everything out of this area won't be drawn.
    var clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0);

    // Color scale: give me a specie name, I return a color
    var color = d3.scaleOrdinal()
        .domain(["VANCOUVERTITANS", "TORONTODEFIANT"])//, "BOSTONUPRISING"])
        .range(["#17b801", "#bb0500"])//, "#419cda"])

    // Add brushing
    var brush = d3.brushX()                 // Add the brush feature using the d3.brush function
        .extent([[0, 0], [width, height]]) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
        .on("end", updateChart) // Each time the brush selection changes, trigger the 'updateChart' function

    // Create the scatter variable: where both the circles and the brush take place
    var scatter = svg.append('g')
        .attr("clip-path", "url(#clip)")

    // Add circles
    scatter
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return x(d.frame);
        })
        .attr("cy", function (d) {
            return y(d.player_name);
        })
        .attr("r", 8)
        .style("fill", function (d) {
            return color(d.team_name)
        })
        .style("opacity", 0.5)

    // Add the brushing
    scatter
        .append("g")
        .attr("class", "brush")
        .call(brush);

    // A function that set idleTimeOut to null
    var idleTimeout

    function idled() {
        idleTimeout = null;
    }

    // A function that update the chart for given boundaries
    function updateChart() {

        extent = d3.event.selection

        // If no selection, back to initial coordinate. Otherwise, update X axis domain
        if (!extent) {
            if (!idleTimeout) return idleTimeout = setTimeout(idled, 350); // This allows to wait a little bit
            x.domain([0, videoSource.duration * 60])
        } else {
            x.domain([x.invert(extent[0]), x.invert(extent[1])])
            scatter.select(".brush").call(brush.move, null) // This remove the grey brush area as soon as the selection has been done
        }

        // Update axis and circle position
        xAxis.transition().duration(1000).call(d3.axisBottom(x))
        scatter
            .selectAll("circle")
            .transition().duration(1000)
            .attr("cx", function (d) {
                return x(d.frame);
            })
            .attr("cy", function (d) {
                return y(d.player_name);
            })

    }

    var legendRectSize = 18;
    var legendSpacing = 4;

    var legend = svg.selectAll('.legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', function (d, i) {
            var height = legendRectSize + legendSpacing;
            var offset = height + color.domain().length / 2;
            var horz = width + margin.left;
            var vert = i * height - offset + 30;
            return 'translate(' + horz + ',' + vert + ')';
        });

    legend.append('rect')
        .attr('width', legendRectSize)
        .attr('height', legendRectSize)
        .style('fill', color)
        .style('stroke', color);

    legend.append('text')
        .attr('x', legendRectSize + legendSpacing)
        .attr('y', legendRectSize - legendSpacing)
        .text(function (d) {
            return d
        });
}




