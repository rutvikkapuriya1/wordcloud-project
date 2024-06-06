console.log("Script loaded");

const words = [
   [{'text': 'પર્યાવરણ', 'size': 30},
 {'text': 'વિશ્વ', 'size': 22},
 {'text': 'બેઠક', 'size': 11},
 {'text': 'દિવસ', 'size': 10},
 {'text': 'ફાયર', 'size': 9},
 {'text': 'વૃક્ષારોપણ', 'size': 9},
 {'text': 'દિવસ', 'size': 8},
 {'text': 'વન', 'size': 8},
 {'text': 'દિવસ', 'size': 7},
 {'text': 'ઉજવણી', 'size': 6},
 {'text': 'લોકસભા', 'size': 6},
 {'text': 'ભવ્ય', 'size': 6},
 {'text': 'પોલીસ', 'size': 6},
 {'text': 'આવ્યું', 'size': 6},
 {'text': 'આરોપી', 'size': 6},
 {'text': 'રાજકોટ', 'size': 5},
 {'text': 'ભાસ્કર', 'size': 5},
 {'text': 'ભાજપ', 'size': 5},
 {'text': 'મત', 'size': 5},
 {'text': 'આગ', 'size': 5},
 {'text': 'ચોરી', 'size': 5},
 {'text': 'પોલીસે', 'size': 5},
 {'text': 'દિવસે', 'size': 5},
 {'text': 'વિભાગ', 'size': 5},
 {'text': 'કાર્યક્રમ', 'size': 5},
 {'text': 'યોજાયો', 'size': 5},
 {'text': 'ઝડપાયો', 'size': 5},
 {'text': 'વર્ષ', 'size': 5},
 {'text': 'ઝડપી', 'size': 5},
 {'text': 'વર્ષ', 'size': 5},
 {'text': 'પોઈન્ટ', 'size': 5},
 {'text': 'સો', 'size': 5},
 {'text': 'સવારે', 'size': 4},
 {'text': 'રૂપિયા', 'size': 4},
 {'text': 'લાખ', 'size': 4},
 {'text': 'સીટ', 'size': 4},
 {'text': 'જીત', 'size': 4},
 {'text': 'વિરોધ', 'size': 4},
 {'text': 'રેકોર્ડ', 'size': 4},
 {'text': '10', 'size': 4},
 {'text': 'વડોદરા', 'size': 4},
 {'text': 'પાટણ', 'size': 4},
 {'text': 'ઉજવણી', 'size': 4},
 {'text': 'રીક્ષા', 'size': 4},
 {'text': 'બંધ', 'size': 4},
 {'text': 'ફરાર', 'size': 4},
 {'text': 'ફરિયાદ', 'size': 4},
 {'text': 'અદાણી', 'size': 4},
 {'text': 'ઇન્વેસ્ટમેન્ટ', 'size': 4},
 {'text': 'નિફ્ટી', 'size': 4},
 {'text': 'ચાંદી', 'size': 4},
 {'text': 'સેન્સેક્સ', 'size': 4},
 {'text': 'શેર', 'size': 4},
 {'text': 'ગુજરાત', 'size': 3},
 {'text': 'વરસાદ', 'size': 3},
 {'text': 'જૂન', 'size': 3},
 {'text': 'બેંક', 'size': 3},
 {'text': 'એનાલિસિસ', 'size': 3},
 {'text': 'જીત', 'size': 3},
 {'text': 'કલાક', 'size': 3},
 {'text': 'નિ:શુલ્ક', 'size': 3},
 {'text': 'સાંસદ', 'size': 3},
 {'text': 'વિધાનસભા', 'size': 3},
 {'text': 'જંગી', 'size': 3},
 {'text': 'લીડ', 'size': 3},
 {'text': 'વલસાડ', 'size': 3},
 {'text': 'જીત', 'size': 3},
 {'text': 'ઓલ', 'size': 3},
 {'text': 'વૃક્ષો', 'size': 3},
 {'text': 'કહ્યું-', 'size': 3},
 {'text': 'વાત', 'size': 3},
 {'text': 'કાર', 'size': 3},
 {'text': 'અમદાવાદ', 'size': 3},
 {'text': 'અઢી', 'size': 3},
 {'text': 'અમદાવાદ', 'size': 3},
 {'text': 'કેન્દ્ર', 'size': 3},
 {'text': 'રેલવે', 'size': 3},
 {'text': 'બુલેટ', 'size': 3},
 {'text': 'ફોન', 'size': 3},
 {'text': 'પાણી', 'size': 3},
 {'text': 'ગામ', 'size': 3},
 {'text': 'દર', 'size': 3},
 {'text': 'કાર', 'size': 3},
 {'text': 'દ્વારકા', 'size': 3},
 {'text': 'બાઈક', 'size': 3},
 {'text': 'દિન', 'size': 3},
 {'text': 'ગામે', 'size': 3},
 {'text': '2024', 'size': 3},
 {'text': 'સૌ', 'size': 3},
 {'text': 'આજે', 'size': 3},
 {'text': 'ખાસ', 'size': 3},
 {'text': 'ફયુચર', 'size': 3},
 {'text': 'વધારો', 'size': 3},
 {'text': 'આગાહી', 'size': 2},
 {'text': 'જિલ્લાઓ', 'size': 2},
 {'text': 'વાતાવરણ', 'size': 2},
 {'text': 'શહેર', 'size': 2},
 {'text': 'જિલ્લા', 'size': 2},
 {'text': 'લોકો', 'size': 2},
 {'text': 'વલસાડ', 'size': 2}];
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
