// function that is passed as an arg to another function

//used to handle async operations like file reading,networking,db interactions

//when done, do this next


function callback1(){
    console.log("hello");
    }

function callback2(){
    console.log("wait");
    }
        

function callback3(){
    console.log("goodbye");
    }

    //callback function
function callStack(callback1,callback2,callback3){
    callback1();
    callback2();
    callback3();
 }
    
callStack(callback1,callback2,callback3);

// example of callback adding function
//without using callback word.

function addUp(displaySum, x, y){
    let result = x + y;
        displaySum(result);
}

function displaySum(result){
    console.log(result);
}

addUp(displaySum,1,2);

//adding up array of numbers using callback

const ArrNums = [1,2,3,4,5]

function sumArr(answer){
    let ans = 0;
    for(let i = 0; i <= ArrNums.length-1;i++){
        ans += ArrNums[i];
    }
    answer(ans);
}
//super fancy arrow function
sumArr((result)=> console.log(result));

//subtraction in an array using callback

let a = 5;
let b = 3;

 const array = [];
array.push(a);
array.push(b);


function subArr(answer){
    let ans = array[0];
    for(let i = 1; i < array.length;i++){
        ans -= array[i];
    }
    answer(ans);
}
subArr((result)=> console.log(result));

