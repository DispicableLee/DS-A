function addBinary(a, b) {
    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    return sum.toString(2);
};