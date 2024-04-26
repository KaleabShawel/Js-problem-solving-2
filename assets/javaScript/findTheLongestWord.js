const word = document.querySelector('#fn');
const display = document.querySelector('#display');
const button = document.querySelector('#btn_Find');

button.addEventListener('click', () => {
        
    let findWord = word.value;
    
    if (findWord === "") {
        return alert("Please enter a sentence!");
    } 

     // Check if the input is a numeric value
    if (!isNaN(findWord)) {
        return alert("Please enter a string value, not a number!");
    }
    
      // Check if the input contains any numeric characters
    if (/\d/.test(findWord)) {
        return alert("Please enter a string value without numbers!");
    }
    
    let findLongestWordLengthFunc = findLongestWordLength(findWord);

    display.innerHTML = `The Longest word is "${findLongestWordLengthFunc.word}" and its length is ${findLongestWordLengthFunc.length} <hr/>`;

    setTimeout(() => { 
        display.innerHTML = "";
    }, 10000);

});
 
const findLongestWordLength = (str) => { 
  let words = str.split(" ");
  let maxLength = 0;
  let longestWord = '';
  for(let i = 0; i < words.length; i++){
     if(isNaN(words[i]) && words[i].length > maxLength){
       maxLength = words[i].length;
       longestWord = words[i];
     }
  }
  return {word: longestWord, length: maxLength};
};

