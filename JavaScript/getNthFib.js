//given a (n) integer, find the (n)th number in the fibonacci sequence
//ex 0,1,1,2,3,5,8,13,21, etc


function getNthFib(n){
    let baseF = [0,1]
    for(let i = 0;i<n;i++){
        let newF = baseF[baseF.length-1] + baseF[baseF.length - 2]
        baseF.push(newF)
    }
    console.log(baseF)
    return baseF[n-1]
}


console.log(getNthFib(6))

// recursive solution

function getNthFibRecursively(n){
    if (n <=2) return 1
    
    
}