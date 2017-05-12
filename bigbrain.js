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


//
function chunkArrayInGroups(arr, size) {
  var final = [];
  var storage = [];
  var counter = 0;
  for(var i=0; i < arr.length; i++) {

  }
  return true;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);


//Return remaining array elements
function slasher(arr, howMany){
  if(arr.length !== arr.length - howMany){
    arr.splice(0, howMany);
  }
  return arr;
}

slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
