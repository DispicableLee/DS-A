const d = [1,2,3,3]
const c = [9]
const n = [1,2,3]



function plusOne(digits) {

    const e1 = BigInt(digits.join("")) 
    console.log(e1)
    console.log((e1 + BigInt(1)).toString().split(""))

    //ALTERNATE SOLUTION
    return (BigInt(digits.join("")) + BigInt(1)).toString().split("")
};

console.log(plusOne(d))


console.log(BigInt(1))


//BigInt datatype is to 'safely' perform mathematical operations on big numbers

