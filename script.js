console.log("Script loaded");

const words = [
   {'text': 'ભાસ્કર', 'size': 16}, {'text': 'વ્યું', 'size': 16}, {'text': 'મિલી', 'size': 16}, {'text': 'વિદેશી', 'size': 16}, {'text': 'અમદાવાદ', 'size': 15}, {'text': '2', 'size': 15}, {'text': 'લા', 'size': 15}, {'text': 'વધારો', 'size': 15}, {'text': 'ૂ', 'size': 13}, {'text': 'લિમિટેડ', 'size': 13}, {'text': 'વર્ષં', 'size': 13}, {'text': 'ર', 'size': 12}, {'text': 'શરૂ', 'size': 11}, {'text': 'ી', 'size': 11}, {'text': 'કરો', 'size': 11}, {'text': 'કરોડું', 'size': 11}, {'text': 'મુંબઈ', 'size': 11}, {'text': '્સી', 'size': 11}, {'text': 'પાા', 'size': 10}, {'text': 'મળી', 'size': 10}, {'text': 'રવિવારે', 'size': 10}, {'text': 'રો', 'size': 10}, {'text': 'વર્ષ', 'size': 10}, {'text': 'વખે', 'size': 10}, {'text': 'ચૂંટણી', 'size': 10}, {'text': 'પ્રથમ', 'size': 10}, {'text': 'રા્ય', 'size': 9}, {'text': 'મોટી', 'size': 9}, {'text': 'ફોરે', 'size': 9}, {'text': 'પોસ્ટ', 'size': 9}, {'text': 'વા', 'size': 9}, {'text': 'ગુરાં', 'size': 9}, {'text': 'અનુસંધા', 'size': 9}, {'text': 'ક્ઝિટ', 'size': 9}, {'text': 'ઠક', 'size': 9}, {'text': 'પ', 'size': 9}, {'text': 'દિવ્ય', 'size': 8}, {'text': 'લી', 'size': 8}, {'text': 'પોલીસે', 'size': 8}, {'text': '્યૂઝ', 'size': 8}, {'text': 'ટી', 'size': 8}, {'text': 'િસં', 'size': 8}, {'text': 'સ્ટેટ', 'size': 8}, {'text': 'મોટા', 'size': 8}, {'text': 'સત', 'size': 8}, {'text': 'ે', 'size': 8}, {'text': 'મ', 'size': 8}, {'text': 'લો', 'size': 8}, {'text': 'કંપી', 'size': 8}, {'text': 'કુલ', 'size': 8}, {'text': 'ભાપ', 'size': 8}, {'text': 'સોમવારે', 'size': 8}, {'text': 'ચાંદીી', 'size': 8}, {'text': 'વી', 'size': 7}, {'text': 'ટક્કર', 'size': 7}, {'text': 'સ', 'size': 7}, {'text': 'ટલાક', 'size': 7}, {'text': 'ો', 'size': 7}, {'text': '3', 'size': 7}, {'text': '*', 'size': 7}, {'text': 'દેશં', 'size': 7}, {'text': 'ાહેર', 'size': 7}, {'text': 'સરકાર', 'size': 7}, {'text': 'કંપીઓ', 'size': 7}, {'text': 'શે', 'size': 7}, {'text': 'રમં', 'size': 7}, {'text': 'યા', 'size': 7}, {'text': 'વર્ષી', 'size': 6}, {'text': 'કારે', 'size': 6}, {'text': 'ક્રાઈમ', 'size': 6}, {'text': 'ચાર', 'size': 6}, {'text': 'દી', 'size': 6}, {'text': 'પાણી', 'size': 6}, {'text': 'સ્પિટલ', 'size': 6}, {'text': 'હિી', 'size': 6}, {'text': 'કરાઈ', 'size': 6}, {'text': 'રા', 'size': 6}, {'text': '1', 'size': 6}, {'text': 'રૂપિયા', 'size': 6}, {'text': '5', 'size': 6}, {'text': 'િણામ', 'size': 6}, {'text': 'રવીા', 'size': 6}, {'text': 'વ્યવસ્થા', 'size': 6}, {'text': 'ટોપ', 'size': 6}, {'text': 'ટેિસ', 'size': 6}, {'text': 'મહે', 'size': 6}, {'text': 'લોકો', 'size': 6}, {'text': 'વું', 'size': 6}, {'text': 'લીટર', 'size': 6}, {'text': 'દિવ્યભાસ્કર', 'size': 5}, {'text': 'દિલ્હી', 'size': 5}, {'text': 'મરાષ્ટ્ર', 'size': 5}, {'text': 'અકસ્', 'size': 5}, {'text': 'પૂરઝડપે', 'size': 5}, {'text': '્ડ', 'size': 5}, {'text': 'ઈ', 'size': 5}, {'text': 'પી', 'size': 5}, {'text': 'બંધ', 'size': 5}, {'text': 'ઈબ્રિડ', 'size': 5}, {'text': 'પાસ', 'size': 5}, {'text': 'બીી', 'size': 5}, {'text': 'મિલ્ક', 'size': 5}, {'text': 'મળશે', 'size': 5}, {'text': 'શેઠ', 'size': 5}, {'text': 'ગ', 'size': 5}, {'text': 'મુખ્યમં્રી', 'size': 5}, {'text': 'મોટો', 'size': 5}, {'text': 'સ્', 'size': 5}, {'text': 'વ્યક્િ', 'size': 5}, {'text': '–', 'size': 5}, {'text': 'લાગુ', 'size': 5}, {'text': 'ેા', 'size': 5}, {'text': 'મુબ', 'size': 5}];
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
                .text(`${d.text}: ${d.size}`)
                .style("display", "block");
        })
        .on("mouseout", function () {
            d3.select(this)
                .style("fill", "#69b3a2");
            d3.selectAll(".tooltip").remove();
        });
}
