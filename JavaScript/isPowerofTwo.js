let p = 5
let l = 16
//============================== my solution =================================
function isPowerofTwo(n){
    if(n===0) return false
    if(n===1) return true
    if(n/2){
        while(n/2){
            n = n/2
            console.log(n)
            if(n===1) return true
            if(!(n%2===0) || n===0) return false
        }
    }
    return true
}

//======================== better solution
function powerOfTwo(n){
    let x = 0;
    while (2**x < n) {
        x++;
    }
    return 2**x === n;
}


console.log(isPowerofTwo(1))