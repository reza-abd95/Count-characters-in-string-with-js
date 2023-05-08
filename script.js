function numberOfLetters(sentence){

const data =Object.values(sentence.reduce((prev, cur) => {
  if(!prev[cur]){
    prev[cur] = {[cur]: 1};
  } 
  else{
    prev[cur][cur]++;
  } 
  return prev;

  }, {}))
  return data;
}


let mySentence = ('Hi my name is Reza ABD').split("");

console.log(numberOfLetters(mySentence))




