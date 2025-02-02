//destructureing is turning arrays [] or objects {} and assigning them to variables

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);
//reassigns b =2 and a = 1

const colors = ["red","green","blue"];

//looks like this

[colors[2], colors[0]] = [colors[0], colors[2]];

console.log(colors);

const [first, second, ...extra] = colors;

console.log(first);
console.log(second);
console.log(extra);

//you can do it with objects

const person1 = {
    name: "NBA",
    last: "Youngboy",
    age: 25,
    job: "YN",
}

const person2 = {
    name: "King",
    last: "Von",
    age: 26,
    job: "Chiraq Officer",
}


//destructuring in a function
function displayPerson({name,last,age,job}){
    console.log(name);
    console.log(last);
    console.log(age);
    console.log(job);
}
displayPerson(person1);
displayPerson(person2);