function mostVowels(sentence) {
    // your code here
  const vowels = ["a","e","i","o","u","y"]
  let returned = "blah"
  let highest = 0
  let map = {}
  let split = sentence.split(" ")
  for(let i = 0; i<split.length; i++){
    let curr = split[i]
    for(let j = 0; j<curr.length; j++){
        if(vowels.includes(curr[j])){
            map[curr] = (map[curr] || 0) +1
        }
    }
  }
  const entries = Object.entries(map)
  for(const e of entries){
    if(e[1]>highest){
        returned = e[0]
        highest = e[1]
    }
  }

  return returned
}

const k = "what a wonderful life"

console.log(mostVowels(k))