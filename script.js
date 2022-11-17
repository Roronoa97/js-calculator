var display = document.getElementById("display");
var value = [];
var index = 0;

function displayInput(input){
    display.value += input;
}

function operatorInput(op){
    var lastValue = display.value.slice(-1);//get last value
    console.log(lastValue);
    //cannot click multiply and division if there is no value
    if(op == "×" || op == "÷"){
        if(display.value != 0){
            displayInput(op);
        }
    }
    else{
        displayInput(op);
    }
}

function clearDisplay(){
    display.value = "";
}
