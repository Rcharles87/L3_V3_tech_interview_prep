// Reverse a string
function reverseString(str) {
  //solved using a forLoop
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;

  //solved using built-in methods
  // return str.split("").reverse().join("");
}

// Find max in array
function findMax(arr) {
  let compare = 0;

  //solved using built in method
  //   arr.forEach((num) => {
  //     num > compare ? (compare = num) : null;
  //   });

  //solved using for loop with same ternary and normal if statement
  for (let i = 0; i < arr.length; i++) {
    // arr[i]> compare ? (compare = arr[i]) : null;
    if (arr[i] > compare) {
      compare = arr[i];
    }
  }

  return compare;
}

// Check if palindrome
function isPalindrome(word) {
    //added guard just in case 
  if (word.length === 0) {
    return true;
  }

  return word.split("").reverse().join("").toLowerCase() === word.toLowerCase()
    ? true
    : false;
}

console.log(isPalindrome("racecar"));

module.exports = { reverseString, findMax, isPalindrome };
