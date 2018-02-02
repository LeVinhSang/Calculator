const operator = require('./Operators');

  function Calculator() {
    this.operators = {
        '-' : new operator.Sub(),
        '+' : new operator.Add(),
        '*' : new operator.Mul(),
        '/' : new operator.Div()
    };
    this.calculate = (operator, firstNum, secondNum) => {
        if(!this.operators[operator])
            throw new Error('Operator '+ operator + ' Not support !!');
        return this.operators[operator].run(firstNum, secondNum);
    }
}
module.exports = Calculator;