 const Calculator = require('./index');
 let calculator = new Calculator();

 try {
     console.log(calculator.calculate('/', 2, 0));
 } catch (err) {
     console.log(err.toString());
 }
