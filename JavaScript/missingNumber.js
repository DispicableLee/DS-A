let n = [9,1,0,2,4,3,5,7,6]



function missingNumber(a){
    let newArray = a.sort((a,b)=>a-b)
    let missing = 0
    let fulLength = newArray.length
    for(let i = 0,j = 0; i<fulLength, j<newArray.length; i++, j++){
        if(a[i]!=fulLength[j]) missing = fulLength[j]
        console.log(missing)
    }
    return missing
}

console.log(missingNumber(n))