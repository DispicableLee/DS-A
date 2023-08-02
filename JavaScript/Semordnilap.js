//semordnilap is "palindrome" backwards


const n = ["diaper", "repaid", "test", "abc", "cba", "test"]
function semordnilap1(array) {
  const returned = []
    for(let i = 0;i<array.length;i++){
        for(let j = 0; j<array.length;j++){
            let reversed = array[j].split("").reverse().join("")
            if(array[i]===reversed) returned.push([array[i], array[j]])
        }
    }
    console.log(returned)
  return returned;
}
console.log(semordnilap1(n))
//the problem with this solution is that it creates duplicates of the same word pairing, so if we wanted to
//condense it, we would need to go through the returned array and remove every other element, which would
//increase the time complexity, which we do not want
//=========================================================================


//better solution with SET datatype
//the SET datatype is a container of things that looks like an array, 
//but one which we can use additional operations on like ".add" and ".has"
//does not replace a hashmap, as key/value pairs are useful
function semordnilap(words) {
  const wordSet = new Set()
  const pairs = []
  for(const word of words){
    const reversed = word.split("").reverse().join("")
    if(wordSet.has(reversed)) pairs.push([word,reversed])
    else wordSet.add(word)
  }
  return pairs
}
console.log(semordnilap(n))