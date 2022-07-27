
let counter = 0;

function add() {
    counter++
    console.log(document.getElementById("count").innerHTML = counter);
    if (counter >= 10) {
        document.getElementById("message").innerHTML = "you have cross 10. go back"
    }
    else {
        document.getElementById("message").innerHTML = " "
    }
}
function subtract() {
    counter--
    console.log(document.getElementById("count").innerHTML = counter);
    if (counter < 10) {
        document.getElementById("message").innerHTML = " "
    }
    else {
        document.getElementById("message").innerHTML = "you have cross 10. go back"
    }
}
function reset() {
    counter = 0
    console.log(document.getElementById("count").innerHTML = counter);
    if (counter = 0) {
        document.getElementById("message").innerHTML = " "
    }
    else {
        document.getElementById("message").innerHTML = " "
    }

}




