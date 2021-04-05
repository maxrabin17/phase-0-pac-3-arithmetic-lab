

const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

const increment = function(n) {
    return ++ n
}

const decrement = function(n) {
    return -- n
}

const makeInt = function(n) {
  /*  let num = parseInt(n, 10) 
    return num  */
    return parseInt(n, 10)
}

const preserveDecimal = function(n) {
    return parseFloat(n)
}
