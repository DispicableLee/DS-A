let n = "codeleet"
let arr = [4,5,6,7,0,2,1,3]

function restoreString(s, indices){
    let array = []
    let i = 0
    while(i<indices.length){
        array.push([s[i], indices[i]])
        i++
    }
    array.sort(([,a],[,b]) => a-b)
    for(const j of array){
        j.pop()
    }
    return array.join("")
    
}

console.log(restoreString(n,arr))