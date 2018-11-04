var d3 = require("d3")

var setParameterFromInput = function(parameter) {
    parameter.set(d3.select(this).property('value') )
}

var setParameterFromSelect = function(parameter) {
    parameter.set(d3.select('select').property('value') )
}

var parametersetup = function(parameters){
    var div = d3.select("#parameters")

    var parameterDivs = div.selectAll("div").data(parameters)

    var parameterInputs =  parameterDivs.enter().filter((d)=>{
        return !Array.isArray(d.value)})
    var parameterSelections =  parameterDivs.enter().filter((d)=>Array.isArray(d.value))

    parameterInputs.append("div")
      .attr("id",(d)=>d.name)
        .text((d)=>d.name)
            .append("input")
                .on("change",setParameterFromInput)
                .attr("type","text")
                .attr("value",(d)=>{
                    return d.value
                })


    parameterSelections.append("div")
      .attr("id",(d)=>d.name)
        .text((d)=>d.name)
        .append("select")
            .on("change",setParameterFromSelect)
            .each(function(d){
                var values = d.value
                var s =  d3.select(this)
                s.selectAll("option").data(values)
                    .enter().append("option")
                        .attr("value",(v)=>{
                            return v
                        })

                        .text((v)=>v)
            })

  }

  module.exports = parametersetup
