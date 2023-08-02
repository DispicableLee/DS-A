let x = ["bella", "label", "roller"]
let y = ["cool", "lock", "cook"]


function commonLetters(words){
    let map = {}
    let final = []
    for(let i = 0; i<words.length; i++){
        for(const j of words[i]) map[j] = (map[j] || 0) +1
    }
    let entries = Object.entries(map)
    for(let k = 0; k<entries.length; k++){
        if(map[entries[k][0]]>=words.length){
            let count = 0
            while(count <= map[entries[k][0]]){ 
                final.push(entries[k][0])
                count++
            }
        }
    }
    console.log(entries)
    console.log(map)
    return final

}

console.log(commonLetters(x))