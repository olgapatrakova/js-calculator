const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: '+',
};

console.log('Welcome to the Calculator program! Which operator would you like to use?');
console.log('1. add (+)');
console.log('2. subtract (-)');
console.log('3. multiply (*)');
console.log('4. divide (/)');
console.log('5. exponify (^)');
console.log('6. find a remainder from a division (%)');

// Check if a valid operator is chosen
const operators = ["add", "+", "subtract", "-", "multiply", "*", "divide", "/", "remainder", "find a remainder", "%", "exponify", "^"];

if (!operators.includes(exampleAdditionInput.operation)) {
  console.log('Please choose to add (+), subtract (-), multiply (*), divide (/), exponentiate (^) or find a remainder (%)!')
}

// Check if user input is not a letter
function input_check(number) {
  if (!String(number).match(/[-]?\d+(\.\d+)?/)) {
    console.log('Please enter a valid number => ');
  }
  return true;
}

input_check(exampleAdditionInput.num1);
input_check(exampleAdditionInput.num2);

console.log('Here is the result of the calculation.')

// Output the result depending on the chosen operation

function operation(num1, num2, operation) {
  const result;
  
}
