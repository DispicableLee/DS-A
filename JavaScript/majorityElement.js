//find the element in an array that occurs most frequently


const n = [1,1,2,1,2,2,3,3,3,3]

function majorityElement(array){
    //hash-map, baby
    const map = {}
    //for each (i) in the array, perform the loop:
        //if (i) is not in the map, set its value to zero
        //increment it's value by one
    for(const i of array){
        if(!(i in map)) map[i] = 0
        map[i]++
    }
    //create an array of the key/value pairs of the map
    const fin = Object.entries(map)
    //sort the array by values in ascending order
    fin.sort(([,v1],[,v2])=>v1 - v2)
    console.log(fin)
    //return the first element of the last element in the key/value pair array
    return fin[fin.length-1][0]
}

console.log(majorityElement(n))