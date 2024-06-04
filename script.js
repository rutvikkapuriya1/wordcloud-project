console.log("Script loaded");

const words = [
    { text: "Donation", size: 5 },
    { text: "સલમાન", size: 30 },
    { text: "કુલ", size: 27 },
    { text: "ચૂંટણી", size: 24 },
    { text: "અમદાવાદ", size: 23 },
    { text: "સૌ", size: 21 },
    { text: "ભાજપ", size: 21 },
    { text: "રન", size: 19 },
    { text: "ફોર્મ", size: 19 },
    { text: "પૂર્વ", size: 18 },
    { text: "ક્ષત્રિય", size: 18 },
    { text: "બિશ્નોઈ", size: 17 },
    { text: "કોલકાતા", size: 16 },
    { text: "બેઠક", size: 16 },
    { text: "ભાજપ", size: 16 },
    { text: "દાઉદ", size: 16 },
    { text: "ઉમેદવારી", size: 16 },
    { text: "મેચ", size: 15 },
    { text: "સમય", size: 15 },
    { text: "જાહેરાત", size: 14 },
    { text: "લાખ", size: 14 },
    { text: "લાખ", size: 14 },
    { text: "અનમોલ", size: 14 },
    { text: "તપાસ", size: 14 },
    { text: "શાહ", size: 14 },
    { text: "સિક્સ", size: 13 },
    { text: "રોહિત", size: 13 },
    { text: "પોઇન્ટ", size: 13 },
    { text: "શરૂ", size: 13 },
    { text: "ટકા", size: 13 },
    { text: "હાર્દિક", size: 12 },
    { text: "આજે", size: 12 },
    { text: "ભાજપ", size: 12 },
    { text: "ઉમેદવાર", size: 12 },
    { text: "સહિત", size: 12 },
    { text: "એસએલઆર", size: 12 },
    { text: "જાહેર", size: 12 },
    { text: "ઘર", size: 12 },
    { text: "રો", size: 12 },
    { text: "સલમાન", size: 12 },
    { text: "સંઘવી", size: 12 },
    { text: "ગુજરાત", size: 11 },
    { text: "વિકેટ", size: 11 },
    { text: "સામાન્ય", size: 11 },
    { text: "ઉપરાંત", size: 11 },
    { text: "શક્યતા", size: 11 },
    { text: "દાવો", size: 11 },
    { text: "ચૂંટણી", size: 11 },
    { text: "ભાજપે", size: 11 },
    { text: "રજૂ", size: 11 },
    { text: "પશ્ચિમ", size: 11 },
    { text: "દિવસે", size: 11 },
    { text: "દેવપુરા", size: 11 },
    { text: "ભારત", size: 10 },
    { text: "સ્થળ", size: 10 },
    { text: "રાજસ્થાન", size: 10 },
    { text: "બોલિંગ", size: 10 },
    { text: "પ્રદર્શન", size: 10 },
    { text: "૦", size: 10 },
    { text: "મિનિટ", size: 10 },
    { text: "લોકસભા", size: 10 },
    { text: "કામ", size: 10 },
    { text: "કરોડ", size: 10 },
    { text: "કેસ", size: 10 },
    { text: "અનુસાર", size: 10 },
    { text: "છોટા", size: 10 },
    { text: "ટિકિટ", size: 9 },
    { text: "(પહેલા", size: 9 },
    { text: "પાના", size: 9 },
    { text: "ચાલુ)", size: 9 },
    { text: "નોટિસ", size: 9 },
    { text: "મુજબ", size: 9 },
    { text: "બેસણું", size: 9 },
    { text: "બ્યુટી", size: 9 },
    { text: "એઆઈ", size: 9 },
    { text: "રાજકુમાર", size: 9 },
    { text: "મિનિટ", size: 9 },
    { text: "વેકેશન", size: 9 },
    { text: "હસમુખ", size: 9 },
    { text: "ફટકારી", size: 8 },
    { text: "બેટ્સમેન", size: 8 },
    { text: "મેચ", size: 8 },
    { text: "૧૧", size: 8 },
    { text: "હૈદરાબાદ", size: 8 },
    { text: "હજુ", size: 8 },
    { text: "પડી", size: 8 },
    { text: "લોકો", size: 8 },
    { text: "કરવા", size: 8 },
    { text: "દિલ્હી", size: 8 },
    { text: "રાખી", size: 8 },
    { text: "ટેન્ડર", size: 8 },
    { text: "બેઠકો", size: 8 },
    { text: "બંધ", size: 8 },
    { text: "જય", size: 8 },
    { text: "ડિગ્રી", size: 8 },
    { text: "આઈએનડીબી", size: 8 },
    { text: "ભારત", size: 8 },
    { text: "રાજ્ય", size: 8 },
    { text: "વિગતો", size: 8 },
    { text: "ભારે", size: 8 },
    { text: "સલમાન", size: 8 },
    { text: "મળ્યું", size: 8 },
    { text: "રાહુલ", size: 8 },
    { text: "લોરેન્સ", size: 8 },
    { text: "રૂપિયા", size: 8 },
    { text: "તાપમાન", size: 8 },
    { text: "ક્ષત્રિયો", size: 8 }];

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
