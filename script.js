// create function for listening to button inputs
const input = document.querySelectorAll('.key');
let inputArray = [];
let display = document.querySelector('#display');
let currentAnswer = '';

function inputs () { // logs what the user inputted into an object array.
    input.forEach(button => button.addEventListener('click', function() {
            let which = this.id;
            let numOp = '';
            if (this.className == "key") { 
                numOp = "number";
            } else {
                numOp = "operator";
            }
            let b = {id: which, type: numOp}
            inputArray.push(b);
            console.log(inputArray);
            // following section displays button pushes to the display
            let element = document.getElementById(which);
            let text = element.textContent || element.innerText;
            let content = document.createTextNode(text + ' ');
            display.appendChild(content);
    })); 
}

inputs();
console.log(inputArray);

// calc should not use eval as it could be dangerous with user inputs.
// calcs numopnum, returns result, and then does numopnum and logs internally until equals is called.
/*

TO DO:
- Implement clear button
- Implement back button
- implement % function
- add ability to have 'ongoing' equations where the calculator interacts with the previous answer
- add ability to enter multi digit numbers



*/

function calculate() {
    //if (inputArray[0]['type'] == "number" && inputArray[1]['type'] == "operator" && inputArray[2]['type'] == "number") {
    if (inputArray.length > 2) {
        let content = '';
        let firstNumberID = inputArray[0]['id'];
        let secondNumberID = inputArray[2]['id'];
        console.log(firstNumberID, secondNumberID);
        let firstNumberElement = document.getElementById(firstNumberID);
        let secondNumberElement = document.getElementById(secondNumberID);
        let firstNumber = firstNumberElement.innerHTML || firstNumberElement.innerText;
        let secondNumber = secondNumberElement.innerHTML || secondNumberElement.innerText;
        console.log(firstNumber, secondNumber, 'test');
        if (inputArray[1]['id'] == 'add') {
            sum = Number(firstNumber) + Number(secondNumber);
            console.log(sum);
            content = document.createTextNode(sum);
            display.innerHTML = '';
            display.appendChild(content);
        } else if (inputArray[1]['id'] == 'subtract') {
            difference = Number(firstNumber) - Number(secondNumber);
            content = document.createTextNode(difference);
            display.innerHTML = '';
            display.appendChild(content);
        } else if (inputArray[1]['id'] == 'divide') {
            if (inputArray[2] == 0) {
                content = document.createTextNode('Error')
                display.innerHTML = '';
                display.appendChild(content);
            } else {
                quotient = Number(firstNumber) / Number(secondNumber);
                content = document.createTextNode(+quotient.toFixed(3));
                display.innerHTML = '';
                display.appendChild(content);
            }
        } else if (inputArray[1]['id'] == 'multiply') {
            product = Number(firstNumber) * Number(secondNumber);
            content = document.createTextNode(product);
            display.innerHTML = '';
            display.appendChild(content);
        } else if (inputArray[1]['id'] == 'percentage') {
            percentage(inputArray[0], inputArray[2]);
            content = document.createTextNode(difference);
            display.innerHTML = '';
            display.appendChild(content);
        }
  //  }
    currentAnswer = display.textContent || display.innerText
    let answerText = document.createTextNode(currentAnswer);
    display.innerHTML = '';
    display.appendChild(answerText);
    }
}

let go = document.getElementById("equals");
go.onclick = console.log('test');
go.onclick = calculate;


// functions for add, subctract, divide, multiply, input to percentage
function add(x, y) {
    let sum = x + y;
    return sum;
}

function subtract(x, y) {
    let difference = x - y;
    return difference;
}

function divide(x, y) {
    let quotient = x / y;
    if (y == 0) {
        return 'Can\'t divide by zero';
    } else {
        return quotient;
    }
}

function multiply(x, y) {
    let product = x * y;
    return product;
}

function percentage(x) {
    let percentage = x / 100;
    return percentage;
}

// create function that will take an operator function above with 2 numbers
function operation(f) {
    if (operation == '+') {
        add(x, y);
    } else if (operation == '-') {
        subtract(x, y);
    } else if (operation == '/') {
        divide(x, y);
    } else if (operation == '*') {
        multiply(x, y);
    } else if (operation == '%') {
        percentage(x);
    }
}
// create functions that populate display when you press number buttons. Store this value.

// make these numbers populate the operator function and return to the display.

// get clear button to work

// get backspace button to work

// allow user to string multiple operations together.

// round decimals on display
