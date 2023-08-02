//try to find out whether or not a given string,
// when made to lowerCase and when all the non-calphabetical characters are removed,
//is a palindrome




const phrase = "A man, a plan, a canal: Panama";

function phrasePalindrome(p) {
    //create an altered version of the given phrase with the following operations:
  let x = p
    //remove all the non-calphabetical characters
    .replace(/[^a-z0-9]/gi, "")
    //make the string lowercase
    .toLowerCase()
    //split it into an array of letters
    .split("");
    //make a funky forLoop with the following parameters:
        //set I = 0
        //set J = the lase index of the letters array
        //make sure I and J never cross
        //increment I each loop
        //decrement J each loop
  for (let i = 0, j = x.length - 1; i <= j; i++, j--) {
    //if at any point in the loop, if I and J are not equal, this string is not a palindrome
    if (x[i] !== x[j]) return false;
  }
  //if by the end of the loop FALSE is not returned, the given string is indeed a palindrome
  return true;
}

console.log(phrasePalindrome(phrase));
