// translate a given string of roman numerals to its integer equivalent 
//if a given roman numeral is less than the one that comes after it, 
//subtract that amount from the one that comes after, vice versa.l\
//"IV" is 4, but "VI" is 6, etc


const c = "LVIII"
const d = "MCMXCIV"

//initialize symbols object with corresponding numeral letters and integer values
symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};



function romanToInteger(s){
    //initialize value integer, set to 0
    value = 0;
    for(let i = 0; i < s.length; i+=1){
        //for each letter in the given string, if its value in the object is less than the one that comes after,
        //subtract its value from the VALUE, else add to it.
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    //at the end of the loop, return the final VALUE.
    return value
}

console.log(romanToInteger(d))