// a palindrome is a word or collection of letters that read the same way
//when written forwards or backwards. A good example is RACECAR.


function isPalindrome(string) {
  // loop through the string for the length of HALF the string
  for(let i = 0;i<Math.floor(string.length/2);i++)
  //if the current letter of the string is not equal to the corresponding letter on the 
  //opposite half of the array, return false
    if(string[i] != string[string.length - 1 -i]) return false
  return true
}