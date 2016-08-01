(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(number1, number2) {
  this.number1 = number1;
  this.number2 = number2;
}

Calculator.prototype.add = function() {
  return this.number1 + this.number2;
};

Calculator.prototype.subtract = function() {
  return this.number1 - this.number2;
};

Calculator.prototype.multiply = function() {
  return this.number1 * this.number2;
};

Calculator.prototype.divide = function() {
  return this.number1 / this.number2;
};



exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/calculator.js":1}]},{},[2]);
