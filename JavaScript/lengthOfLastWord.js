//in a given string, find the length of the last WORD in the array

const w = "   fly me   to   the moon  "


function lengthOfLastWord(s){
    //split the string into an array of words
    let splitted = s.split(" ")
    //initialize an emptey array
    let array = []
    //to remove potential spaces in the array, 
    //loop through the array and push any element whose length is not equal to 0 to the emptey array
    for(i of splitted){
        if(i.length!=0) array.push(i)
    }
    console.log(array)
    //return the length of the lase element(WORD) in the array
    return array[array.length-1].length
}

console.log(lengthOfLastWord(w))