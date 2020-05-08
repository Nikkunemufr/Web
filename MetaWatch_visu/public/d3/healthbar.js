function generateHealthBar(data) {
    // Setup svg using Bostock's margin convention
    d3.select("#healthBar").html("");
    var margin = {top: 20, right: 160, bottom: 35, left: 30};

    var width = 860 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var svg = d3.select("#healthBar")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// List of subgroups = header of the csv files = soil condition here
    var subgroups = ["health", "armor", "shield"];


    // List of groups = species here = value of the first column called group -> I show them on the X axis
    var groups = d3.map(data, function (d) {
        return (d.player_name)
    }).keys()

    // Add X axis
    var x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2])
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSizeOuter(0));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 800])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['rgb(226,226,224)', '#ffa733', '#17b5ff'])

    //stack the data? --> stack per subgroup
    var stackedData = d3.stack()
        .keys(subgroups)
        (data)

    // Show the bars
    svg.append("g")
        .selectAll("g")
        // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .enter().append("g")
        .attr("fill", function (d) {
            return color(d.key);
        })
        .selectAll("rect")
        // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(function (d) {
            return d;
        })
        .enter().append("rect")
        .attr("x", function (d) {
            return x(d.data.player_name);
        })
        .attr("y", function (d) {
            return y(d[1]);
        })
        .attr("height", function (d) {
            return y(d[0]) - y(d[1]);
        })
        .attr("width", x.bandwidth())


    var legendRectSize = 18;
    var legendSpacing = 4;

    var legend = svg.selectAll('.legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', function (d, i) {
            var height = legendRectSize + legendSpacing;
            var offset = height * color.domain().length / 2;
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
            return d;
        });

}


