// calc.js

var timer = setReminder();

function setReminder() {
    clearTimeout(timer);
    timer = setTimeout(showPleaseUseMe, 30000);
}

function showPleaseUseMe() {
    alert("Please, use me...");
    setReminder();
}

function    isPosInt(val) {
    return (/^[0-9]+$/.test(val));
}

function    executeCalculation(a, b, operator) {
    if (operator == 0)
        return (a + b);
    else if (operator == 1)
        return (a - b);
    else if (operator == 2)
        return (a * b);
    else if (operator == 3)
        return (a / b);
    else if (operator == 4)
        return (a % b);
}

function    calculateResult() {
    let a = document.getElementById("leftOperator").value;
    let b = document.getElementById("rightOperator").value;
    let operator = document.getElementById("drpdwnOperators").selectedIndex;
    let result;
   
    if (!isPosInt(a) || !isPosInt(b))
        result = "Error :(";
    else if (operator >= 3 && b == 0)
        result = "It’s over 9000!";
    else
        result = executeCalculation(Number(a), Number(b), operator);
    alert(result);
    console.log(result);
    setReminder();
}

document.getElementById("btnTry").addEventListener('click', calculateResult);
