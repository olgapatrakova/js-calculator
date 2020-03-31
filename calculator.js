const exampleAdditionInput = {
  num1: 5,
  num2: 3,
  operation: 'find a remainder',
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

// Check if user input is not a letter for numbers
function input_check(number) {
  if (!String(number).match(/[-]?\d+(\.\d+)?/)) {
    console.log('Please enter a valid number => ');
  }
  return true;
}

input_check(exampleAdditionInput.num1);
input_check(exampleAdditionInput.num2);

console.log('Here is the result of the calculation:')

// Output the result depending on the chosen operation

function operation(num1, num2, operation) {
  let result;
  switch(operation) {
    case 'add':
    case '+':
      result = `${num1} + ${num2} = ${num1 + num2}`;
      break;

    case 'subtract':
    case '-':
      result = `${num1} - ${num2} = ${num1 - num2}`;
      break;

    case 'multiply':
    case '*':
      result = `${num1} * ${num2} = ${num1 * num2}`;
      break;

    case 'divide':
    case '/':
      // Handle the division by zero case
      if (num2 === 0) {
        result = 'Error! Division by zero';
        break;
      }
      result = num1 / num2;
      break;

    case 'exponify':
    case '^':
      // Show the process of exponentiation
      let first_part = `${num1} * `.repeat(num2 - 1);
      result = first_part + `${num1} = ${num1 ** num2}`;
      break;
        
    case 'remainder':
    case 'find a remainder':
    case 'find remainder':
    case '%':
      result = `${num1} % ${num2} = ${num1 % num2}`;
      break;
    
    default:
      result = `Invalid input`
  }
  return result
}
console.log(operation(exampleAdditionInput.num1, exampleAdditionInput.num2, exampleAdditionInput.operation))