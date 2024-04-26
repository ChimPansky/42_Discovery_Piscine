// balloon.js

var colors = ['red', 'green', 'blue'];
var colorInd = 0;

document.getElementById("popp-balloon").addEventListener('click', function() {
    var balloon = document.getElementById("popp-balloon");

    changeBalloonSize(balloon, 10);
    changeBalloonColor(balloon, 1);
});

document.getElementById("popp-balloon").addEventListener('mouseleave', function() {
    var balloon = document.getElementById("popp-balloon");

    changeBalloonSize(balloon, -5);
    changeBalloonColor(balloon, -1);
});

function    changeBalloonSize(element, change) { 
    var oldSize;
    var newSize;
    
    oldSize = parseFloat(window.getComputedStyle(element).width);
    newSize = getNewSize(oldSize, change);   
    element.style.width = newSize + "px";
    element.style.height = newSize + "px";
}

function    getNewSize(oldVal, change)
{
    var newVal;
    
    newVal = oldVal + change;
    if (newVal > 420 || newVal < 200) {
        return (200);
    }
    return (newVal);
}

function    changeBalloonColor(element, change) {
    colorInd += change;
    if (colorInd > 2) {
        colorInd = 0;
    }
    if (colorInd < 0) {
        colorInd = 2;
    }
    element.style.backgroundColor = colors[colorInd];
}
