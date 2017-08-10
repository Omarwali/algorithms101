//      ------------------------------------------------ [ALGORITHMS] ------------------------------------------------ 

//--[Area of a Triangle]--
function areaOfTriangle(base, height){
  return base * height / 2;
}
areaOfTriangle(4, 6);


//--[Computer power]--
function computePower(num, exponent) {
  var power = 1;
  for (var i=0; i < exponent; i++) {
    power *= num;
  }
  return power;
}
computePower(2, 4);


//--[Reverse a String]--
function reverseString(string) {
  const reverse = [];
  let counter = 0;
  let rstring = "";
  for(let i = string.length-1; i != -1; i--){
    reverse[counter] = string[i];
    counter++;
  }
  for (let i = 0; i < reverse.length; i++) {
    rstring += reverse[i];
  }
  return rstring;
}
reverseString("apple");


//--[Recursion]--
var recursiveFunc = (n) => {
  let result;
  if(n == 1)
    return 1;
  result = recursiveFunc(n-1) * n;
  return result
}
recursiveFunc(8);


//--[Bubble Sort]--
var ranNums = [99, -10, 100123, 18, -978, 5623, 463, -9, 287, 49];
function bubbleSort(arrayOfNumbers){
  let placeholder;
  for(let i = 1; i < arrayOfNumbers.length; i++){
    for(let j = arrayOfNumbers.length-1; j >= i; j--){
      if (arrayOfNumbers[j-1] > arrayOfNumbers[j]) {
        placeholder = arrayOfNumbers[j-1];
        arrayOfNumbers[j-1] = arrayOfNumbers[j];
        arrayOfNumbers[j] = placeholder;
      }
      else {
        console.log("no sorting took place this round j is currently " + j);
      }
    }
    console.log("i is currently on iteration " + i);
  }
  return arrayOfNumbers;
}
bubbleSort(ranNums);


//--[Palindrome]--
function palindrome(str) {
  var alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789";
  var newString = "";

  for (var i=0; i < str.length; i++) {
    for (var j=0; j < alphaNum.length; j++) {
      if(alphaNum.charAt(j) === str[i].toLowerCase()) {
        newString += str[i].toLowerCase();
      }
    }
  }
  var newString2 = newString;
  newString = newString.split("").reverse().join("");
  console.log(newString, newString2);
  if(newString === newString2){
    console.log("Its a match!");
    return true;
  }
  else {
    console.log("Nope!");
    return false;
  }
}
palindrome("_eye");


//--[Biggest Word In String]--
function findLongestWord(str) {
  var biggestWord = "";
  var biggestWordLength = 0;
  str = str.split(" ");
  for(var i=0; i < str.length; i++) {
    if(str[i].length > biggestWordLength){
      biggestWordLength = str[i].length;
      biggestWord = str[i];
    }
  }
  return biggestWordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


//--[Capitalize first letter of each word in a string UPGRADED]--
function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for(var i=0; i < str.length; i++) {
    str[i] = str[i].replace(str[i][0], str[i][0].toUpperCase());
  }
  str = str.join(" ");
  return str;
}
titleCase("sHoRt AnD sToUt");


//--[Return largest number in each array]--
function largestOfFour(array) {
  var lrg = [];
  for (var i=0; i < array.length; i++) {
    console.log(`This is the sub array at index: ${i}`);
    for (var j=0; j < array.length; j++) {
      console.log(array[i][j]);
      if(array[i][j] > lrg[i] || lrg[i] == undefined){
        lrg[i] = array[i][j];
      }
    }
  }
  return lrg;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//--[Confirm Ending]--
function confirmEnding(str, target) {
  var verdict = false;
  for(var i=0; i < str.length; i++){
    if(str.substr(i) == target){
      // substring = str.substr(i)
      console.log("It's a match!");
      verdict = true;
      break;
    }
    else {
      console.log("No mas...");
      verdict = false;
    }
  }
  return verdict;
}


//--[Repeat a string specified number of times]--
function repeatStringNumTimes(str, num) {
  var multiplier;
  if(num >= 1) {
    multiplier = str.repeat(num);
  }
  else {
    multiplier = "";
  }
  return multiplier;
}

repeatStringNumTimes("abc", -2);


//--[Turncate a string]--
function truncateString(str, num) {
  if(str.length > num) {
    if (num <= 3) {
      str = str.slice(0, num);
    }
    else {
      str = str.slice(0, num -3);
    }
    str += "...";
  }
  return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);


//--[Chunky Monkey]--
function chunkArrayInGroups(arr, size) {
  let finalArray = [];
  let storage = [];
  for(let i = 0; i < arr.length; i++) {
    if(storage.length >= size) {
      console.log("here's a split");
      finalArray.push(storage)
      console.log(finalArray);
      storage = [];
    }
    console.log(storage);
    storage.push(arr[i]);
  }
  finalArray.push(storage);
  return finalArray
}


//--[Slasher Flick]--
function slasher(arr, howMany){
    arr.splice(0, howMany);
  return arr;
}
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);


//--[Mutations]--
function mutation(arr) {
  var x = 0;
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[arr.length - 1].toLowerCase();

  for (var i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) != -1) {
      console.log(`${secondWord[i]} is in ${firstWord}`);
      x += 1;
    }
    else {
      console.log(`${secondWord[i]} is not in ${firstWord}`);
    }
  }
  if (x === secondWord.length) {
    return true;
  }
  else {
    console.log(x);
    return false;
  }
}
mutation(["hello", "hey"]);


//--[Falsy Bouncer]
function bouncer(array) {
  let newArray = [];
  let isTruthy = array.filter(function(value, index){
    if(value) {
      newArray.push(value);
    }
  });
  return newArray;
}
bouncer([7, "ate", "", false, 9]);


//--[Seek and Destroy]--
function destroyer(array) {
  let args = Array.from(arguments);
  let tripWire = 0;
  let newArray = [];
  for(let i=0; i < array.length; i++) {
    console.log(`Outer array current value: ${array[i]}`);
    for(let j=1; j < args.length; j++) {
      console.log(`Inner: ${args[j]}`);
      if(array[i] !== args[j]) {
        tripWire++;
      } else {
          tripWire--;
        }
      console.log(tripWire);
    }
    if(tripWire == args.length-1) {
      console.log(`Unique number: ${array[i]}`);
      newArray.push(array[i]);
      tripWire = 0;
      console.log(newArray);
    } else {
        console.log(`Not a unique number: ${array[i]}`);
        tripWire = 0;
      }
    }
  return newArray;
}
destroyer(["tree", "hamburger", 53], "tree", 53);


//--[Where do I belong ]--
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){
    return a - b;
  });
  // var answer = `sorted: [${arr}] - index: ${arr.indexOf(num)}`
  return arr.indexOf(num);
}
getIndexToIns([10, 20, 30, 40, 50], 35);


//--[Caesars Cipher]--
function rot13(str) {
  var decoded = "";
  for (var i = 0; i < str.length; i++) {
    if (typeof str[i] === "string" && str[i].match(/[A-Z]/gi)) {
      if (str.charCodeAt(i) + 13 > 90) {
        decoded += String.fromCharCode(str.charCodeAt(i) - 13);
      }
      else {
        decoded += String.fromCharCode(str.charCodeAt(i) + 13);
      }
    }
    else {
      decoded += str[i];
    }
  }
  return decoded;
} 
