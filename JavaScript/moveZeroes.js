let a = [1,0,2,0,3,4,0]

function moveZeroes(s){
    for(const i of s){
        if(i===0) s.push(s.splice(s.indexOf(i), 1)[0])
    }
    return s
}
console.log(moveZeroes(a))