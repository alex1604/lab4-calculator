var callback = function () {
    let calculKeys = document.getElementsByClassName('calcul');
    let display = document.getElementById('display');
    display.focus();
    for (i = 1; i < calculKeys.length; i++) {
        let thisKey = calculKeys[i];
        thisKey.addEventListener('click', function () {
            thisKey.style.border = "2px solid black"
            thisKey.style.backgroundColor = "#6E6E6E";
            display.value = display.value + Number(thisKey.innerHTML);
            setTimeout(function () {
                thisKey.style.border = "0.5px solid black";
                thisKey.style.backgroundColor = "gray";
            }, 100);
            display.focus();
        });
    }
    document.addEventListener('keypress', function (event) {
        let key = event.key;
        console.log(key);
        let myReg = /[0-9]/;
        if (myReg.exec(key)) {
            console.log('match1');
            //display.value = display.value + Number(key);
            for (i = 1; i < calculKeys.length; i++) {
                if (key == Number(calculKeys[i].innerHTML)) {
                    let thisKey = calculKeys[i];
                    thisKey.style.border = "2px solid black"
                    thisKey.style.backgroundColor = "#6E6E6E";
                    setTimeout(function () {
                        thisKey.style.border = "0.5px solid black";
                        thisKey.style.backgroundColor = "gray";
                    }, 100);
                }
            }
        }
        display.focus();
    })
}
window.addEventListener('load', callback);