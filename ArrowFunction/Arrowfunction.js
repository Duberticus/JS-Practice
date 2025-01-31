//concise way to write simple functions that you only use once
//(parameters) => function

//function hello(){
  //  console.log("Hello")
//}

 //   hello();

const hello = (name) => console.log(`hello ${name}`);

hello("Jerry");

console.log("hello");

setTimeout( () => console.log("hello"), 3000);

const numbers = [1,2,3,4,5];

const squares = numbers.map((element) => Math.pow(element,2));
console.log(squares);