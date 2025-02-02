//rest and spread opperator ...
//can bundle up or spread them

//example of spread. it spreads the array and finds the max.
const numbers = [1,2,3,4,5];
const numbersSecond = [6,7,8,9,10];

const max = Math.max(...numbers);

console.log(max);

//using destructuring and spread opp

const newArr = [...numbers,...numbersSecond];
[newArr[0],newArr[9]]=[newArr[9],newArr[0]];
console.log(newArr);

//example of rest operator
const number1 = 1
const number2 = 2
const number3 = 3
const number4 = 4

function arrayOfNums(...numbers){
    console.log(numbers);
}

//summing numbers

arrayOfNums(number1,number2,number3,number4);

function addNums(...numbers){
    let result =  0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const result = addNums(number1,number2,number3,number4)

console.log(result);

//avg calculator using rest operator

function avgNums(...numbers){
    let result2 =  0;
    let counter = 0;
    for(let number of numbers){
        result2 += number;
        counter++;
    }
    return result2/counter;
}
const result2 = avgNums(number1,number2,number3,number4)

console.log(result2);

