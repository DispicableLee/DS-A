const l = "ace"
const b = "abcde"


function validSubsequence(s,t){
    let sPointer = 0
    let test = t.split("")
    for(let i = 0; i<test.length;i++){
        if(s[sPointer]===test[i]){
            sPointer++
            if(sPointer == s.length) break
        }
    }
    return s.length === sPointer
}


console.log(validSubsequence(l,b))