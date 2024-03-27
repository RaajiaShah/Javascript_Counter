var num = 00;
var numdom = document.getElementById('num');

function increase() {

    num += 1;

    console.log("num")
    numdom.innerHTML = "0" + num;

    if (num > 9) {

        numdom.innerHTML = num;

    }

}


function decrease() {
    console.log("num")
    num -= 1;
    numdom.innerHTML =  num;
}



function reset() {
    console.log("num")
    num = 00;
    numdom.innerHTML = "0" + num;
}