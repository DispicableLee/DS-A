let c = "leetcode"
let j = "aaa"


function firstNonRepeat(s){
    let map = {}
    for(const i of s){
        map[i] = (map[i] || 0) + 1
    }
    console.log(map)
    for(const j in map){
       if(map[j]===1) return s.indexOf(j)
    }
    return -1
}

console.log(firstNonRepeat(c))