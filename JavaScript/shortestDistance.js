const phrase = ["practice", "makes", "perfect", "makes", "coding", "makes"]
const p = "practice"
const h = "coding"
const r = "makes"

function shortestDistanceOne(list, word1, word2){
    let distance = Infinity
    for(let i = 0;i < list.length; i++){
        if(list[i]===word1){
            for(let j = 0;j < list.length; j++){
                if(list[j]===word2){
                    if(Math.abs(i - j) < distance){
                        distance = Math.abs(i - j)
                    }
                }
            }
        }
    }
    return distance
}

console.log(shortestDistanceOne(phrase, h, p))


var shortestDistance = function(list, word1, word2) {
    let distance = Infinity;

    for(let i = 0; i < list.length; i++){
        if(list[i] === word1){ //find the first instance of 'word1', then perform the loop
            for(let j = 0 ; j < list.length; j++){
                if(list[j] === word2){
                    if(Math.abs(i - j) < distance){
                        distance = Math.abs(i - j);
                    }
                }
            }
        }
    }

    return distance
};

console.log(shortestDistance(phrase,p,h))