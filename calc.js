const calculatormodule = {
    sum:function(num1,num2){
        return num1 + num2
    },
    sub:function(num1,num2){
        return num1 - num2
    },
    mul:function(num1,num2){
        return num1*num2
    },
    div:function(num1,num2){
        return num1/num2
    },
}
module.exports = calculatormodule;
const calcy = require('./calc')
console.log('sum:'+calcy.sum(4,5))
console.log('sub:'+calcy.sub(4,5))
console.log('mul:'+calcy.mul(4,5))
console.log('div:'+calcy.div(10,5))