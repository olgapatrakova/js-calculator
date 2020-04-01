// This line "loads" the prompt package and puts it into a variable we can use called prompt
const prompt = require('prompt');

console.log('Welcome to the Calculator program! Please provide 2 integers or floats and then choose an operator');
console.log('1. add (+)');
console.log('2. subtract (-)');
console.log('3. multiply (*)');
console.log('4. divide (/)');
console.log('5. exponify (^)');
console.log('6. find a remainder (%)');

const calculateUserInput = function(error, promptInput) {
  console.log(operation(Number(promptInput.num1), Number(promptInput.num2), promptInput.operator.toLowerCase()))
}  

//start the prompt
prompt.start();

//collect two numbers an operation conforming to the schema
//then call the function `calculator` with the user input
const schema = {
  properties: {
    num1: {
      // The number can also be a float
      description: 'Enter the 1st number',
      pattern: /[-]?\d+(\.\d+)?/,
      message: 'Num1 must be an integer or float',
      required: true,
      allowEmpty: false
    },
    num2: {
      description: 'Enter the 2nd number',
      pattern: /[-]?\d+(\.\d+)?/,
      message: 'Num2 must be an integer or float',
      required: true,
      allowEmpty: false
    },
    operator: {
      description: 'Enter an operation',
      // Handling all cases (uppercase, capitals) for the operations 
      conform: function (value) {
        lowercased = value.toLowerCase()
        const operators = ["1", "1.", "add", "+", "2", "2.", "subtract", "-", "3", "3.", "multiply", "*", "4", "4.", "divide", "/", "5", "5.", "exponify", "^", "6", "6.", "remainder", "find a remainder", "find remainder", "%"]
        return operators.includes(lowercased)
      },
      message: 'Invalid operator. Try again',
      required: true,
      allowEmpty: false
    }
  }
};
prompt.get(schema, calculateUserInput);


// Make calculations depending on the chosen operation
const operation = function(num1, num2, operation) {
  console.log('Here is the result of the calculation:')
  let result;
  switch(operation) {
    case '1':
    case '1.':
    case 'add':
    case '+':
      result = `${num1} + ${num2} = ${num1 + num2}`;
      break;

    case '2':
    case '2.':
    case 'subtract':
    case '-':
      result = `${num1} - ${num2} = ${num1 - num2}`;
      break;

    case '3':
    case '3.':
    case 'multiply':
    case '*':
      result = `${num1} * ${num2} = ${num1 * num2}`;
      break;

    case '4':
    case '4.':
    case 'divide':
    case '/':
      // Handle the division by zero case
      if (num2 === 0) {
        result = 'Error! Division by zero';
        break;
      }
      // Round some really long numbers
      let notRounded = num1 / num2;
      result = `${num1} / ${num2} = ${Math.round(notRounded * 1000) / 1000}`
      break;

    case '5':
    case '5.':
    case 'exponify':
    case '^':
      // Show the process of exponentiation
      let exponentiationProcess = `${num1} * `.repeat(num2 - 1);
      result = `${num1} ^ ${num2} = ` + exponentiationProcess + `${num1} = ${num1 ** num2}`;
      break;
        
    case '6':
    case '6.':
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
