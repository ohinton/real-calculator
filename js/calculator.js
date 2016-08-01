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
