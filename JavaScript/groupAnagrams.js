const k = ["tea","eat", "nat", "bat", "tab"]


function groupAnagrams(strings){
    let returned = [];
    for(let i = 0; i<strings.length; i++){
        let curr = strings[i]
        let gram = ana(curr)
        for(let j = i+1; j<strings.length; j++){
            let jCurr = strings[j];
            let jGram = ana(jCurr)
            if(gramCheck(gram, jGram)){
                returned.push([curr, jCurr])
            }
        }
    }
    return returned
}   



function ana(s){
    let map = {};
    for(let i = 0; i<s.length; i++){
        let c = s[i];
        map[c] = (map[c]||0) +1
    }
    return map;
}

function gramCheck(map1, map2){
    let first = Object.keys(map1)
    console.log(first)
    let second = Object.keys(map2)
    if(first.length!=second.length) return false
    for(const i of first){
        console.log(i)
        if(!(second.includes(i))) return false
    }
    return true
}


console.log(groupAnagrams(k))


console.log()
