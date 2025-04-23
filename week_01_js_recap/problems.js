// Reverse a string
function reverseString(str) {
    
    //solved using a forLoop
    let reversedStr = ""
    for(let i = str.length-1; i >= 0; i--){
        reversedStr += str[i]
    }
    return reversedStr


    //solved using built-in methods
    // return str.split("").reverse().join("");
}
  
// Find max in array
function findMax(arr) {

}

// Check if palindrome
function isPalindrome(word) {
    
}

module.exports = { reverseString, findMax, isPalindrome };