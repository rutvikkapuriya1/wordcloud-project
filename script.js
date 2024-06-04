console.log("Script loaded");

const words = [
    { text: "Hello", size: 40 },
    { text: "World", size: 50 },
    { text: "D3", size: 60 },
    { text: "JavaScript", size: 70 },
    { text: "WordCloud", size: 80 },
    // Add more words and their sizes here
];

const layout = d3.layout.cloud()
    .size([800, 600])
    .words(words.map(d => ({ text: d.text, size: d.size })))
    .padding(5)
    .fontSize(d => d.size)
    .on("end", draw);

layout.start();

function draw(words) {
    console.log("Drawing words:", words);
    d3.select("#wordcloud")
        .append("svg")
        .attr("width", layout.size()[0])
        .attr("height", layout.size()[1])
        .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", d => d.size + "px")
        .style("fill", "#69b3a2")
        .attr("text-anchor", "middle")
        .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
        .text(d => d.text)
        .on("mouseover", function (event, d) {
            console.log("Mouseover on:", d.text);
            d3.select(this)
                .style("fill", "#ff6347");
            const tooltip = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 20) + "px")
                .text(`Count: ${d.size}`)
                .style("display", "block");
        })
        .on("mouseout", function () {
            d3.select(this)
                .style("fill", "#69b3a2");
            d3.selectAll(".tooltip").remove();
        });
}
