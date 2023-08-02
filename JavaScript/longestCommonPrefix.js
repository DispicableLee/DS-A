const a = ["flower", "flight", "flow"]
const b = ["dog", "racecar"]



//==================== solution 1
function longestCommonPrefix(arr) {
    let i = 1;
    let prf = arr[0];
    while(i < arr.length){
        if(!arr[i].startsWith(prf)){
            console.log(prf)
            prf = prf.slice(0,-1)
        }else{
            i++
        }
    }
    return prf
};


console.log(longestCommonPrefix(a))



//================solution 2
var longestCommonPrefix2 = function(strs) {

    // if the string is emptey, just return the string
    if (!strs.length) return '';

    // loop through the first string in the array, for how many letters there are in that string:
    for (let i = 0; i <= strs[0].length; i++) {
        // Loop through the other strings
        for (let j = 1; j < strs.length; j++) {
            // if the letters in the initial loop-String (strs[0]) do not match the letters in 
            // the following loop-strings, slice (strs[0]) decrement the string until you have a valid prefix
            if (strs[0][i] !== strs[j][i]) {
                // If not, return the string up to and including the previous character
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
    
};