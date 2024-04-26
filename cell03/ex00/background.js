// background.js

function    changeBackgroundColor() {   
    document.body.style.backgroundColor = getRandomRGB();
}

function    getRandomRGB() {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    return ("rgb(" + red + "," + green + "," + blue + ")");
}

document.getElementById("btn-change-bgc").
addEventListener('click', changeBackgroundColor);

// function    changeBackgroundColor() {
//     var parentObj = this.parentNode;

//     parentObj.style.backgroundColor = getRandomRGB();
// }