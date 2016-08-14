// CHAPTER 2

/* EXERCISE 1
var text = "";
while (text.length < 7) {
  text+="#";
  console.log(text);
}
*/

/* Exercise 2
var num = 0;
while (num < 100){
  num+=1;

  if (num%3 == 0 && num%5 == 0) console.log("FizzBuzz");
  else if (num%3 == 0) console.log("Fizz");
  else if (num%5 == 0) console.log("Buzz");
  else console.log(num);
}
*/

/* Exercise 3
var text = "";
var gridSize = 8;
var counter = 0;

for (var counterY = 0; counterY < gridSize; counterY++) {  
  for (var counterX = 0; counterX < gridSize; counterX++) {
      if (counter%2 == 0) text+= " ";
      else text += "#";
      counter+=1;
  }
  text+="\n";
  if (counter%2 == 0) counter+=1;
  else counter-=1;
}
console.log(text);
*/

// CHAPTER 3

/* EXAMPLE 1
function findMin(num1, num2) {
  if (num1 < num2) return num1;
  else return num2;
}
console.log(findMin(0, 10));
*/

/* EXAMPLE 2
function isEven(num) {
  num = Math.abs(num);
  num -= 2; 
  if (num == 0) return true;
  else if (num == 1) return false;
  else isEven(num); 
}
console.log(isEven(50));
*/

/* EXAMPEL 3.1
var bCount = 0;
function countBs(word) {
  for(var letter = 0; letter < word.length; letter++)
  {
    if (word.charAt(letter) == "B") bCount++;
  }
  return bCount;
}

console.log(countBs("Butter"));
*/

/* EXAMPLE 3.2
var bCount = 0;
function countChar(word, letter) {
  for(var letterPos = 0; letterPos < word.length; letterPos++)
  {
    if (word.charAt(letterPos) == letter) bCount++;
  }
  return bCount;
}

console.log(countChar("Potato", "o"));
*/

//CHAPTER 4
/*
//EXERCISE 1.1
function rangeToArray(start, end, step) { //start = number, end = number
  var numArray = [];

  if (step > 0) {
    for (var counter = start; counter <= end; counter+=step) {
      numArray.push(counter);
    }
  }
  return numArray;
}
console.log(rangeToArray(1, 10, 1)); //NOTE: Does not work for a negative step TODO, figure this out


//EXERCISE 1.2
function arrayToSum(nums) { //nums = array
  var currentTotal = 0;
  for (var counter = 0; counter < nums.length; counter++) {
    currentTotal += nums[counter];
  }
  return currentTotal;
}
console.log(arrayToSum(rangeToArray(1, 10, 1)));
*/

//EXERCISE 2.1
/*
function reverseArray(myArray) {
  var newArray = [];
  for (var counter = myArray.length-1; counter >= 0; counter--) {  
    newArray.push(myArray[counter]);
  }
  return newArray;
}
console.log(reverseArray(rangeToArray(1, 10, 1)));
*/

//EXERCISE 2.2
/*
function reverseArray(myArray) {
  var startingArrayLenght = myArray.length;
  for (var counter = myArray.length-1; counter >= 0; counter--) {
    myArray.push(myArray[counter]);
  }
  myArray = myArray.slice(startingArrayLenght);
  return myArray;
}
//console.log(reverseArray(["a", "b", "c"]));
*/

//EXERCISE 3 -- NOTE: I am totally lost here and I do not understand lists!! 
// note, I did not write this code
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

function arrayToList(arr) {
  var li = {};
  li.value=arr[0], arr.shift();
  if(arr.length) li.rest=arrayToList(arr);
  else li.rest=null; 
  return li;
}
function listToArray(li) {
  var arr = [];
  for(var i=li; i; i=i.rest) arr.push(i.value);
  return arr;
}
function prepend(a, b) { // where a is the new element and b is the exisisting list 
  var li = {};
  li.value=a, li.rest=b;
  return li;
}
function nth(li, n) {
  var elem, cnt=0;
  for(var i=li; i; i=i.rest, cnt++) {
    if(cnt==n) {
      elem=i.value;
      break;
    }
  }
  return elem;
}

console.log(shiftFunction(["a", "b", "c"]));


var obj = {here: {is: "an"}, object: 2};

function deepEqual(a, b) {

  if (typeof a == b && a != null && b != null) {
    return true;
  }
  else {
    for (var count = a; count; count=count.value) {
      if (b)
    }
  }
  // do these objects contain values? 
  // check the values against eachother
  var arr = [];
  for ()
}






