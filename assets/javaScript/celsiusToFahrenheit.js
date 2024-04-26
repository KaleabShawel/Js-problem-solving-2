const tempInCel = document.querySelector('#fn');
const display = document.querySelector('#display');
const button = document.querySelector('#btn_convert');

button.addEventListener('click', () => { 

    let inputTemp = Number(tempInCel.value);

    if (tempInCel.value === "") {
        
        return alert("Please enter a valid number!");
    
    } else if (isNaN(inputTemp)) {
        
        return alert("Invalid entry! Please enter a numeric value.");
    
    } else {

        const convertCelToFahFunc = convertCelToFah(inputTemp);

        display.innerHTML = `The Temperature in Fahrenheit Is : ${convertCelToFahFunc} ℃
 <hr/>`;
    }

    setTimeout(() => { 

        display.innerHTML = "";
    }, 10000);

});

const convertCelToFah = (celsius) => { 

    let fahrenheit = (celsius * 9)/5 +32;   //formula to convert Celsius to Fahrenheit
    return Math.round(fahrenheit);                   
};




