function generateDeathPlayer(data) {
    d3.select("#deathPlayer").html("");
    data.sort(function (x, y) {
        return d3.ascending(x.player_UUID, y.player_UUID);
    })
    let tampon = {};
    data.forEach((players) => {
        if (players.player_name in tampon) {
            tampon[players.player_name] += 1
        } else {
            tampon[players.player_name] = 1
        }
    });
    console.log(tampon);
    let dataset = [];
    for (const [key, value] of Object.entries(tampon)) {
        dataset.push({"player_name": key, "total_death": value});
    }

    var margin = {top: 20, right: 160, bottom: 35, left: 30};

    var width = 860 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
    var svg = d3.select("#deathPlayer")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")

    const chart = svg.append('g')
        .attr('transform', `translate(${margin}, ${margin})`);

    const xScale = d3.scaleBand()
        .range([0, width])
        .domain(dataset.map((s) => s.player_name))
        .padding(0.2)

    const yScale = d3.scaleLinear()
        .range([height, 0])
        .domain([0, 50]);


    chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

    chart.append('g')
        .call(d3.axisLeft(yScale));


    const barGroups = chart.selectAll()
        .data(dataset)
        .enter()
        .append('g')

    barGroups
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (g) => xScale(g.player_name))
        .attr('y', (g) => yScale(g.total_death))
        .attr('height', (g) => height - yScale(g.total_death))
        .attr('width', xScale.bandwidth())
        .style("fill", "#ff8e0c")
        .on('mouseenter', function (actual, i) {
            d3.selectAll('.value')
                .attr('opacity', 0)

            d3.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 0.6)
                .attr('x', (a) => xScale(a.player_name) - 5)
                .attr('width', xScale.bandwidth() + 10)

            const y = yScale(actual.total_death)

            line = chart.append('line')
                .attr('id', 'limit')
                .attr('x1', 0)
                .attr('y1', y)
                .attr('x2', width)
                .attr('y2', y)
                .style("stroke", "#43484c")
                .style("stroke-width", 3);

            barGroups.append('text')
                .attr('class', 'divergence')
                .attr('x', (a) => xScale(a.player_name) + xScale.bandwidth() / 2)
                .attr('y', (a) => yScale(a.total_death) + 30)
                .attr('fill', 'white')
                .attr('text-anchor', 'middle')
                .text((a, idx) => {
                    const divergence = (a.total_death - actual.total_death).toFixed(1)

                    let text = ''
                    if (divergence > 0) text += '+'
                    text += `${divergence}`

                    return idx !== i ? text : '';
                })
        })
        .on('mouseleave', function () {
            d3.selectAll('.value')
                .attr('opacity', 1)

            d3.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 1)
                .attr('x', (a) => xScale(a.player_name))
                .attr('width', xScale.bandwidth())

            chart.selectAll('#limit').remove()
            chart.selectAll('.divergence').remove()
        })

    barGroups
        .append('text')
        .attr('class', 'value')
        .attr('x', (a) => xScale(a.player_name) + xScale.bandwidth() / 2)
        .attr('y', (a) => yScale(a.total_death) + 30)
        .attr('text-anchor', 'middle')
        .text((a) => `${a.total_death}`)
        .style("fill", "#43484c");

}




