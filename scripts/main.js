var callback = function(){
    let equal = document.getElementById('equal');
    //let calculKeys = document.getElementsByClassName('valid');
    let display = document.getElementById('display');
    display.focus();
    /*for (i = 0; i < calculKeys.length; i++) {
        let thisKey = calculKeys[i];
        thisKey.addEventListener('click', function () {
            if(finishedCalculation){
                display.value = '';
            }
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
        if(finishedCalculation){
            display.value = '';
        }
        let key = event.key;
        console.log(key);
        let myReg = /[0-9]/;
        if (myReg.exec(key)) {
            console.log('match1');
            //display.value = display.value + Number(key);
            for (i = 0; i < calculKeys.length; i++) {
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
    });*/
    let clear = document.getElementById('clear');
    clear.addEventListener('click', function(){
        display.value = '';
    });
}
window.addEventListener('load', callback);