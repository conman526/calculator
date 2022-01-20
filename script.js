// create function for listening to button inputs
const input = document.querySelectorAll('.key');
let inputArray = [];

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
        // add line to push this ID to the display
    })); 
}

inputs();

// calc should work by logging the array of inputs until equals is pressed.
// equals should then check to see if input is in num op num op num... order.
// if not returns error.
// if yes, calculate result. --> may be the difficult part without using eval() as that is dangerous.

if (inputArray[0]['type'] == "number" && inputArray[1]['type'] == "operator" && inputArray[2]['type'] == "number")
// create functions for add, subctract, divide, multiply, input to percentage
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
