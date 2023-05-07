function numberOfLetters(sentence){

const data =  sentence.reduce((prev, cur) => {
  if(!prev[cur]) prev[cur] = {letter: cur , number: 1};
  else prev[cur].number = prev[cur].number+1;
  return prev;
}, {})
  return data;
}


let sentence = ('Hi my name is Reza ABD').split("");
console.log(numberOfLetters(sentence));




