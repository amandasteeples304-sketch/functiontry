console.log("Hello, World!");
function sayHello() {
  console.log("Hello world");
}

sayHello();
sayHello();
sayHello();

function sayHelloTo(userName) {
  console.log("Hello" + userName + "!");
}

sayHelloTo("Bob");
sayHelloTo("Jimmy");
sayHelloTo("Alice");

function greet(greeting, userName) {
  console.log(greeting + "" + userName + "!");
}

greet("Good morning", "Bob");
greet("Buenos dias", "Alice");
greet("Bonjour", "Charlie");

function add(a, b) {
  return a + b;
}

const result = add(1, 5);
console.log("The result is", result);
const anotherResult = add(2, 10);
console.log("Another result is", anotherResult);

function multiply(a, b) {
  return a * b;
}

const answer = multiply(1, 5);
console.log("The result is", answer);
const anotherAnswer = multiply(2, 10);
console.log("Another result is", anotherAnswer);

function subtract(a, b) {
  return a - b;
}

const solution = subtract(1, 5);
console.log("The result is", solution);
const anotherSolution = subtract(2, 10);
console.log("Another result is", anotherSolution);

function divide(a, b) {
  return a / b;
}

const retort = divide(1, 5);
console.log("The result is", retort);
const anotherRetort = divide(1, 5);
console.log("Another result is", anotherRetort);

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

const product = calculate(1, 5, "+");
console.log("The result is", product);
const anotherProduct = calculate(2, 10, "*");
console.log("Another result is", anotherProduct);

const minusproduct = calculate(10, 2, "-");
console.log("The result is", minusproduct);
const divideproduct = calculate(20, 10, "/");
console.log("Another result is", divideproduct);
