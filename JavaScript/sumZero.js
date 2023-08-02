function sumZero(n){
    let ar = [];
    ar.length = n;
    for (let i = 0; i < n; i++) ar[i] = (i * 2 - n) + 1;
    return ar;
}

console.log(sumZero(5))