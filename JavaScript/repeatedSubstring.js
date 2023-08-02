


function repeatedSubstring(s) {
    return s.repeat(2).slice(1, -1).includes(s);
};

console.log(repeatedSubstring("abab"))