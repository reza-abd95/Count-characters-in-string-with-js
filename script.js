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
  
let newData= data.reduce(function(prev, cur) {
  return Object.assign(prev, cur);
}, {});

  return newData;
}


let mySentence = ('Hi my name is Reza ABD').replaceAll(" " , "").split("");

console.log(numberOfLetters(mySentence)) 






