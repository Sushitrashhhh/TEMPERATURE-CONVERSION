// TEMPERATURE CONTROL PROGRAM
const textBox = document.getElementById("textBox");
const Fahrenheit = document.getElementById('Fahrenheit');
const Celsius =  document.getElementById("Celsius");
const result = document.getElementById('result');
let temp;

function convert(){

    if(Fahrenheit.checked){
        temp=Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(2) + ' Fahtenheit';
    }
    else if(Celsius.checked){
        temp=Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(2) + ' Celsius';
    }
    else{
        result.textContent = 'select a unit bc';
    }

}