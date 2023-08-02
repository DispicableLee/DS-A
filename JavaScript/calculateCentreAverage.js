let arrayOne = [1,4,5,20,15,36,3,180]


function calculateCentreAverage(a){
    let lowest = a[0]
    let highest = 0
    let total = 0
    for(let i = 0; i<= a.length; i++){
        if(lowest>a[i]) lowest = a[i]
        if(a[i]>highest) highest = a[i]

    }
    for(const j of a){
        if(!(j===lowest && j===highest)){
            total = total + j
        }
    }
    console.log(lowest)
    console.log(highest)
    return (total / a.length - 2)
}

console.log(calculateCentreAverage(arrayOne))