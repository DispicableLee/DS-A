const n = "aaddccbafkl"
function longestPalindrome(s) {
    let result = 0;
    const mem = new Set();
    for(let i=0; i<s.length; i++) {
        if(mem.has(s[i])) {
            result+=2;
            mem.delete(s[i]);
        } else { 
            mem.add(s[i]);
        }
    };
    console.log(mem)
    return result + (mem.size > 0 ? 1 : 0);
};

console.log(longestPalindrome(n))

//==================================== Solution 2 ========================
function longestPalindromeTwo(s) {
  let ans = 0;
  let keys = {};
  
  for (let char of s) {
    //set the 'keys' value of 'char' to either 0, or if it is alreacy there', its own value, plus one
    keys[char] = (keys[char] || 0) + 1;
    //if its value can be divided by 2, then you can make a valid palindrome, then increment the 'ans' by 2
    if (keys[char] % 2 == 0) ans += 2;
  }
  return s.length > ans ? ans + 1 : ans;
};

console.log(longestPalindromeTwo(n))