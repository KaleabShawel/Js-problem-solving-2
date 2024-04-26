const number = document.querySelector('#fn');
const display = document.querySelector('#display');
const button = document.querySelector('#btn_Factorize');

button.addEventListener('click', () => { 
   
    let inputNum = Number(number.value);

    if (number.value === "") return alert("Please enter a valid number!");
    
    let factorializeFunc = factorialize(inputNum);

    display.innerHTML = `The Result Is : ${factorializeFunc}`;

    setTimeout(() => { 
        display.innerHTML = "";
    }, 10000);
    
});

const factorialize = (num) => { 

    let fac = 1;
    for(let i = 2; i <= num; i++){
       fac *= i;
   }
   return fac;
    
};




/*function factorialize(num) {
   let fac = 1;
   for(let i = 2; i <= num; i++){
       fac *= i;
   }
   return fac;
}

let fa = factorialize(5);
console.log(fa);*/