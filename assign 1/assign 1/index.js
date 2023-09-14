
let age = 21;
function ageInDays(age) {
  return age * 365;
}
console.log(ageInDays(20));
// Output: 7300

let arr = [8, 12, 3, 5];
const findMin = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
console.log(findMin(arr));


function sort(number) {
  return parseInt(number.toString().split('').sort((a, b) => b - a).join(''));
}
console.log(sort((564))); 
// Output: 654

const avg = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log(sum / arr.length);
}

avg(arr)

// !What is the output of console.log([] == []) and console.log({} == {})? And explain your answer.
// the output is an error in either case =>  objects are compared by reference, not by their contents  

function main() {
  console.log("A");
  setTimeout(function print() {
  console.log("B");
  }, 0);
  console.log("C");
  }
  main(); 
  // Output: A
  // C
  // B
  //Explain : In JavaScript, setTimeout is an asynchronous function that schedules a function to be executed after a specified delay (in milliseconds). Even though the delay is set to 0 in this case
  // it will still be executed after the current synchronous execution context finishes.


  var num = 8;
  var num = 10;
  console.log(num);
  //the variable num is initially assigned the value 8, and then it is reassigned the value 10.


  function sayHi() {
    // console.log(name);
    // console.log(age);
    var name = 'Ayush';
    let age = 21;
  }
  
  sayHi();
  //undefined : Cannot access age before initialization