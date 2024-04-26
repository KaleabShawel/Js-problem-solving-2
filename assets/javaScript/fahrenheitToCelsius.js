const tempInFah = document.querySelector('#fn2');
const display2 = document.querySelector('#display2');
const button2 = document.querySelector('#btn_convert2');

button2.addEventListener('click', () => { 

    let inputTemp = Number(tempInFah.value);

    if (tempInFah.value === "") {
        
        return alert("Please enter a valid number!");
    
    } else if (isNaN(inputTemp)) {
        
        return alert("Invalid entry! Please enter a numeric value.");
    
    } else {

        const convertFahToCelFunc = convertFahToCel(inputTemp);

        display2.innerHTML = `The Temperature in Fahrenheit Is : ${convertFahToCelFunc} ℉ <hr/>`;
    }

    setTimeout(() => { 

        display2.innerHTML = "";
    }, 10000);

});

const convertFahToCel = (fahrenheit) => { 

    let celsius = 5 / 9 * (fahrenheit - 32); 
    return Math.round(celsius);
    //return celsius;
};
