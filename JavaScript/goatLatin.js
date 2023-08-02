let a = "I speak Goat Latin"

let vowels = ["a", "e", "i", "o", "u"]

function goatLatin(sentence){
    let newSentence = sentence.split(' ')
    console.log(newSentence)
    for(let i = 0; i< newSentence.length; i++){
        if(vowels.includes((newSentence[i][0]).toLowerCase())){
            newSentence[i] = newSentence[i] + "ma" 
            let k = 0
            while(k<=i){
                newSentence[i] = newSentence[i] + "a"
                k++
            }
        }else{
            newSentence[i]= newSentence[i].substring(1)+ newSentence[i][0] + "ma"
            let k = 0
            while(k<=i){
                newSentence[i] = newSentence[i] + "a"
                k++
            }
        }
    }
    return newSentence.join(" ")
    console.log(newSentence)
}

console.log(goatLatin(a))