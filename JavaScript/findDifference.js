let c = "a"
let d = "aa"


function findDifference(s,t){
    s = s.split("").sort()
    t = t.split("").sort()
    for(let i = 0; i<t.length; i++){
        if(s[i]!=t[i]) return t[i]
    }
}

console.log(findDifference(c,d))