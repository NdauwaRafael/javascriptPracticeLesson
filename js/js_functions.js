//JavaScript Functions

//create a function
//initialize two variables
//assign number values to the variables
//add the two variables
//display the variable
//Define a form inputs to supply values to the two variables

function addition(){
    let num1 = '20';
    let num2 = '25';
    let sum = parseInt(num1) + parseInt(num2);

    document.getElementById('sum').innerText = sum;
}

function multiplication(){
    let num1 =  document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let multiple = num1 * num2;

    document.getElementById('multiple').innerText = multiple;
}

let division = function(num1, num2){
    return num1 / num2;
};
document.getElementById('division').innerText = division(150, 5);

//CALLING A FUNCTION
/**
 * 1. Call the function inside the script
 * 2. Call the function from another function
 * 3. Add an element event listener
 */
// addition();


//WAYS OF DEFINING A FUNCTION
/**
 * 1. Function Statement
 * 2. Function Expression
 */

//CLOSURE
function mathematics() {
    let num1 = document.getElementById('mathNum1').value;
    let num2 = document.getElementById('mathNum2').value;

    function add() {
        let sum = parseInt(num1) + parseInt(num2);
        document.getElementById('mathSum').innerText = sum;
    }
    
    function devide() {
        let dev = num1 / num2;
        document.getElementById('mathdevide').innerText = dev;
    }
    
    function multiply() {
        let multi = num1 * num2;
        document.getElementById('mathMulti').innerText = multi;
    }
    
    function subtract() {
        let diff = num1 - num2;
        document.getElementById('mathDiff').innerText = diff;
    }
    add();
    devide();
    multiply();
    subtract();
}



