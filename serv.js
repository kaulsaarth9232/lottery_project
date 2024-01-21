var attempt = 1;
let inputnumber = parseInt(document.getElementById("num").value);
let lotterynumber = Math.floor(Math.random() * 10);
// console.log(lotterynumber);
function resetgame() {
    attempt = 1;
    lotterynumber = Math.ceil(Math.random() * 10);
    document.getElementById("num").value = '';
}
function fun() {
    // console.log(attempt)
    let inputnumber = parseInt(document.getElementById("num").value);
    console.log(lotterynumber);
    let tt = Math.floor(inputnumber / lotterynumber);
    tt = lotterynumber * tt;
    tt = inputnumber - tt;
    //console.log(inputnumber);
    if (inputnumber < 1 || inputnumber > 100) {
        alert('pls enter a valid number');
        resetgame();
    }
    else if (attempt === tt + 1) {
        alert('YOU WON');
    }

    else {
        if (attempt == 10) {
            resetgame();
        }
        else {
            let chance = 10 - attempt;
            alert(`chances left ${chance}`)
        }
    }
    attempt++;
}
