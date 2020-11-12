/*  Name = Maurya Shubham Roll No = 33 Calculator.css   */


function getPreviousValue(){
    return document.getElementById('previous-value').innerText;
}


function PrintPreviousValue(num){
    document.getElementById('previous-value').innerText = num ;
}


function getOutput(){
    return document.getElementById('output-value').innerText;
}

function PrintOutput(num){
    if (num == ""){
        document.getElementById('output-value').innerText = num ;
    }
    else{
        document.getElementById('output-value').innerText = getFormatedNumber(num) ;
    }
    
}


function getFormatedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value
}


function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
}


var sign = document.getElementsByClassName("sign");
for (var i = 0 ; i< sign.length ; i++){
    sign[i].addEventListener("click",function(){
        if (this.id == "clear"){
            PrintPreviousValue("");
            PrintOutput("");
        }
        else if(this.id == "backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substr(0 , output.length-1);
                PrintOutput(output);
            }
        }
        else {
            var output = getOutput();
            var previous = getPreviousValue();
            if (output == "" && previous != ""){
                if(isNaN(previous[previous.length-1]))
                    previous = previous.substr(0,previous.length-1);
            }
            if(output != "" || previous !=""){
               output= output==""?
               output:reverseNumberFormat(output);
                previous = previous + output;
                if (this.id == "="){
                    var output = eval(previous);
                    PrintOutput(output);
                    PrintPreviousValue("");
                }
                else {
                    previous = previous + this.id
                    PrintPreviousValue(previous)
                    PrintOutput("")
                }
            }
        }
    });
}

var digit = document.getElementsByClassName("digit");
for (var i = 0 ; i< digit.length ; i++){
    digit[i].addEventListener("click",function(){
            var output = reverseNumberFormat(getOutput());
            if (output != NaN){
                output = output + this.id;
                PrintOutput(output);
            }        
    })
}
