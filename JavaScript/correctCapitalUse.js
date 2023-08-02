let c = "USA"
let k = "FLaG"

function correctCapitalUse(word){
    if(word[0]===word[0].toUpperCase()){
        return (
            word.substring(1)===word.substring(1).toUpperCase() ||
            word.substring(1)===word.substring(1).toLowerCase()
        )
    }else{
        return word===word.toLowerCase()
    }
}

console.log(correctCapitalUse("Leetcode"))