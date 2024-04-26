const sentenceElement = document.querySelector('#fn');
const wordToReplaceElement = document.querySelector('#fn2');
const replacementWordElement = document.querySelector('#fn3');
const displayElement = document.querySelector('#display');
const replaceButton = document.querySelector('#btn_Replace');

replaceButton.addEventListener('click', () => { 

  const originalSentence = sentenceElement.value;
  const wordToReplace = wordToReplaceElement.value;
  const replacementWord = replacementWordElement.value;

  try {
    
    if (originalSentence === "" || wordToReplace === "" || replacementWord === "") {
        return alert("Please Fill all the inputs");
    } 
  const replacedSentence = myReplace(originalSentence, wordToReplace, replacementWord);
  displayElement.innerHTML = `${replacedSentence} <hr/>`;
    
  } catch (error) {
    
     displayElement.innerHTML = `Please fill the inputs with sentence or words <hr/>`;
  }
 

});

const myReplace = (str, before, after) => { 

  const stringArr = str.split(" ");
  const [wordToReplace] = stringArr.filter(item => item === before);
  const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
                      ? after[0].toUpperCase() + after.slice(1)
                      : after[0].toLowerCase() + after.slice(1);
  return stringArr.map(item => (item === before ? replacement : item)).join(" ");
};



/*function myReplace(str, before, after) {
   const strArr = str.split(" ");
   const [wordToReplace] = strArr.filter(item => item === before);
   const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase() ? after[0].toUpperCase() + after.slice(1)
              : after[0].toLowerCase() + after.slice(1);
  
  return strArr.map(item => (item === before ? replacement : item)).join(" ");

}

let searchReplace = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(searchReplace);*/