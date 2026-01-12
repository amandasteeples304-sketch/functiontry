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
