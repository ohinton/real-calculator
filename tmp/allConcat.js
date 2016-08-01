var Calculator = require('./../js/calculator.js').calculatorModule;


$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    var newCalculator = new Calculator (number1, number2);
    if (operator === "add") {
      result = newCalculator.add();
    } else if (operator === "subtract") {
      result = newCalculator.subtract();
    } else if (operator === "multiply") {
      result = newCalculator.multiply();
    } else if (operator === "divide") {
      result = newCalculator.divide();
    }
    $("#output").text(result);
  });
});
