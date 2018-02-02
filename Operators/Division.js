class Division  {
    run (firstNum, secondNum) {
        if(secondNum===0) {
            throw new Error('Div by Zero');
        }
        return firstNum / secondNum;
    }
}
module.exports = Division;