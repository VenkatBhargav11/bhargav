function calculator(sum1, sum2, operator) {
    let result;
    
    if (operator === '+') {
        result = sum1 + sum2;
    } else if (operator === '-') {
        result = sum1 - sum2;
    } else if (operator === '*') {
        result = sum1 * sum2;
    } else if (operator === '/') {
        if (sum2 === 0) {
            return "Error: Division by zero is not allowed.";
        }
        result = sum1 / sum2;
    } else {
        return "Error: Invalid operator. Please use '+', '-', '*', or '/'.";
    }
    
    return result;
}
console.log(calculator(24, 54, '+')); 
console.log(calculator(15, 43, '-')); 
console.log(calculator(17, 6, '*')); 
console.log(calculator(16, 6, '/')); 
console.log(calculator(10, 0, '/')); 
console.log(calculator(14, 8, '%'));