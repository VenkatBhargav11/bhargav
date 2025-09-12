// Addition function
function add(a, b) {
  return a + b;
}

// Subtraction function
function subtract(a, b) {
  return a - b;
}

// Multiplication function
function multiply(a, b) {
  return a * b;
}

// Division function
function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
}

// Example usage:
console.log("Add: 21 + 43 =", add(21, 43));          
console.log("Subtract: 72 - 50 =", subtract(72, 50)); 
console.log("Multiply: 9 * 10 =", multiply(9, 10)); 
console.log("Divide: 5 / 8 =", divide(5, 8));     
console.log("Divide: 5 / 3 =", divide(5, 3));     