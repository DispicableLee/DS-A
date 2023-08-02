function perfectNumber(num){
    let init = 0
    let sum = []
    let sumNum = 0
    while(init<num){
        if(num%init===0) sum.push(init)
        init++
    }
    for(const i of sum){
        sumNum = sumNum + i
    }
    return sumNum === num
}


console.log(perfectNumber(28))