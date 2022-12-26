function doMath(a, b, operand) {
    // function executes the math operation given input numbers and operand
    if (operand.includes('+')) {
        return a+b;
    } else if (operand.includes('-')) {
        return a-b;
    } else if (operand.includes('/')) {
        return a/b;
    } else if (operand.includes('*')) {
        return a*b;
    } else {
        return "Error: Invalid Operand";
    }
}

function getInputs(string) {
    // reads the input string and splits to get componenets
    string= string.replace(' ','');
    let nums= string.split(/[+-\/*]/gm);
    let ops = string.split(/[\d]/);
    if (ops.length<2) {
        return "Operation Error";
    } else if (ops.length<0) {return 'noops'};
    let returnarray = [Number(nums[0]), 
        Number(nums[1]),
        ops[1]];
    return returnarray;
}

function calcualte(inputstr) {
    inputs= getInputs(inputstr);
    if (typeof inputs[0]=='string') {
        console.log(inputs);
        return;
    } else {
        let result= doMath(inputs[0], inputs[1], inputs[2]);
        console.log(result);
    }
}

// create number pads on the interface
const buttonpanel= document.getElementById('numpad-panel');
const text_table= [
    '7', '8', '9', '*',
    '4', '5', '6', '/',
    '1', '2', '3', '+',
    '0', 'CLR', '', '-'];
    
for (let n=0; n<16; n++) {
    // create 16 buttons for nums and operators
    let btn= document.createElement('div');
    btn.classList.add('button');
    btn.textContent=text_table[n];
    if (Number(text_table[n])) {
        btn.addEventListener('click', function() {
            // append number to display box
        })
    } else if (text_table[n]==('CLR')) {
        btn.addEventListener('click', function() {
            // clear display funciton
        })
    } else {
        // operand buttons
        // evaluate current content in display and
        // append current operand

    }
    
    buttonpanel.appendChild(btn);

}

//let result = doMath(6,2,'-');