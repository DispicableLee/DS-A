//see if you can generate the given document with the given string(s). 
//NOTE that this relies on the number of letters as well. you can't generate "Bee" if the given characters
//only have one "e"



function generateDocument(characters, document) {
  //instantiate an empty object that you insert the characters into
  const map = {}

  //loop through the characters array
  for(const c of characters){
    //if each character is not in the map object, insert it in with the value of zero
    if(!(c in map)) map[c] = 0;
    //increase the value of each character by one if it is repeated in the characters string
    map[c]++
  }

  //begin looping through the document string,
  //if any letter in the document string is not in the map object,
  //or if the letter's value in the object is zero, return false
  //remove a value of one from the letter's value
  for(const c of document){
    if(!(c in map) || map[c]===0 )return false
    map[c]--
  }
  return true;
}