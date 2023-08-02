function helper(n){

}

//======================== my solution with recursion ====================
function addDigits(num){
    returned = 0
    const digits = num.toString().split("").map(Number)
    console.log(digits)
    for(const i of digits) returned = returned + i
    console.log(returned)
    if((returned.toString().split("")).length===1){ return returned}
    else{
        addDigits(returned)
    }
    return returned
}

console.log(addDigits(92))

