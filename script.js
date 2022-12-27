function doMath (arr) { //(a, b, operand) { //
    // function executes the math operation given input numbers and operand
    a= arr[0]; b=arr[1]; operand=arr[2];
    if (!operand || operand == "") {
        // only first number passed
        return a;
    } else if (operand.includes('+')) {
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
    string = string.replace (' ', '');
    let str= string.split(/(?=\-)|(?=\+)|(?=\*)|(?=\/)/g)
    if (str.length<2) {
        // Only one number found
        return [Number(str[0]), [], ''];
    }
    ops= str[1].charAt(0);
    str[1]= str[1].replace(str[1].charAt(0), '');
    if (str[1]=='') {
        // no second number
        return [Number(str[0]), [], ''];
    }
    return [Number(str[0]), Number(str[1]), ops];
}


function getInputsOld(string) {
    // reads the input string and splits to get componenets
    string= string.replace(' ','');
    let nums= string.split(/[+-\/\*]/); //(/(?=[-+*\/])/); //string.split(/[+-\/*]/gm);
    let ops = string.split(/[\d]/);
    
    if (ops.includes('*')) {
        ops='*'
    } else if (ops.includes('/')) {
        ops= '/';
    } else if (ops.includes ('-')) {
        ops= '-';
    } else if (ops.includes ('+')) {
        ops='+';
    } else {
        ops="";
    }
    // if (ops.length<2) {
    //     return "Operation Error";
    // } else if (ops.length<0) {return 'noops'};
    let returnarray = [Number(nums[0]), 
        Number(nums[1]),
        ops];
    return returnarray;
}

function appendBtnText() {
    this
}

function calcualte(inputstr) {
    inputs= getInputs(inputstr);
    if (typeof inputs[0]=='string') {
        console.log(inputs);
        return;
    } else if (nums[1]=='NaN') {
        //only first input detected (no operand likely)
        return num[1];
    } else {
        let result= doMath(inputs[0], inputs[1], inputs[2]);
        console.log(result);
    }
}

///
// window.addEventListener("keydown", function (e) {
//     const idstr = ".keynum" + e.keyCode;
//     let audio = document.querySelector(idstr);
//     let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if (!audio) return; // skip if no associated audio data
//     audio.currentTime = 0;
//     audio.play();


///
function numberButtonClicked(numvalue) {
    let display= document.getElementById('display');
    if (Number(display.value)==0) {
        display.value= numvalue;
    } else {
        display.value= display.value+
            numvalue;
    }
}

function operandButtonClicked(operand) {
    let display = document.getElementById('display');
    let input= getInputs(display.value);
    let value= doMath(input);
    if (value%1 !== 0) {
        value= value.toFixed(5);
    }
    
    // display.value= `${value}`+this.textContent;
    if (operand == '=') {
        display.value= `${value}`;
    } else {
        //if (value==0) {value=''};
        display.value= `${value}`+`${operand}`;
    }
}

function clrButtonClicked() {
    let display= document.getElementById('display');
        display.value='';
}

// create number pads on the interface
const buttonpanel= document.getElementById('numpad-panel');
const text_table= [
    '7', '8', '9', '*',
    '4', '5', '6', '/',
    '1', '2', '3', '+',
    '0', 'CLR', '=', '-'];
    
for (let n=0; n<16; n++) {
    // create 16 buttons for nums and operators
    let btn= document.createElement('div');
    btn.classList.add('button');
    btn.textContent=text_table[n];
    if (Number(text_table[n])) {
        btn.addEventListener('click', function(e) {
            // append number to display box
            numberButtonClicked(this.textContent);
            // let display= document.getElementById('display');
            // if (Number(display.value)==0) {
            //     display.value= this.textContent;
            // } else {
            //     display.value= display.value+
            //         this.textContent;
            // }
        })
    } else if (text_table[n]==('CLR')) {
        btn.addEventListener('click', function() {
            // clear display funciton
            clrButtonClicked();

            // let display= document.getElementById('display');
            // display.value='';
        })
    } else {
        // operand buttons
        // evaluate current content in display and
        // append current operand
        btn.addEventListener('click', function() {
            operandButtonClicked(this.textContent);

            // let display = document.getElementById('display');
            // let input= getInputs(display.value);
            // let value= doMath(input);
            // if (value%1 !== 0) {
            //     value= value.toFixed(5);
            // }
            
            // // display.value= `${value}`+this.textContent;
            // if (this.textContent == '=') {
            //     display.value= `${value}`;
            // } else {
            //     display.value= `${value}`+this.textContent;
            // }
        }
        );
        

    }
    
    
    buttonpanel.appendChild(btn);

};

window.addEventListener("keydown", function (e) {
    console.log(e.keyCode); //96-105 is 0 to 9; 106 *, 111 /, 107 +, 109 -
    if (e.keyCode >= 96 && e.keyCode <=105) {
        // numbers pressed
        numberButtonClicked((e.keyCode-96)); //Sends 0-9 
    } else if (e.keyCode==106) {
        // operand button pressed
        operandButtonClicked('*')
    } else if (e.keyCode==111) {
        // operand button pressed
        operandButtonClicked('/')
    } else if (e.keyCode==107) {
        // operand button pressed
        operandButtonClicked('+')
    } else if (e.keyCode==109) {
        // operand button pressed
        operandButtonClicked('-')
    } else if (e.keyCode==13) {
        // enter key pressed
        operandButtonClicked('=')
    } else if (e.keyCode==27) {
        // esc key pressed
        clrButtonClicked();

    }
});

