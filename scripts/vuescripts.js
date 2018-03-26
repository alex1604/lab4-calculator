window.addEventListener('load', function(){
    let param1;
    let param2;
    let finishedCalculation = false;
    let vm = new Vue({  // glöm inte window.load!
        el: '#container',
        data: { number: ''},
        methods: {
            square: function(event) {
                param1 = display.value;  // this refererar till data-objektet
                this.number = Math.pow(param1,2);
                finishedCalculation = true;
            },
            root: function(event){
                param1 = display.value;
                this.number = Math.sqrt(param1);
                finishedCalculation = true;
            },
            division: function(event){
                param1 = display.value;
                display.value = '';
                finishedCalculation = false;
            },
            multiplication: function(event){
                param1 = display.value;
                display.value = '';
                finishedCalculation = false;
            },
            substraction: function(event){
                param1 = display.value;
                display.value = '';
                finishedCalculation = false;
            },
            addition: function(event){
                param1 = display.value;
                display.value = '';
                finishedCalculation = false;
            },

            result: function(event) {
                param2 = display.value;
                switch (currentOperatorName){
                    case 'division':
                        this.number = param1/param2;
                        break
                    case 'multiplication':
                        this.number = param1*param2;
                        break
                    case 'substraction':
                        this.number = Number(param1) - Number(param2);
                        break
                    case 'addition':
                        this.number = Number(param1) + Number(param2);
                        break
                }
                finishedCalculation = true;
            }
        }
    });
    let currentOperatorName;
    let operators = document.getElementsByClassName('operator');
    console.log(operators);
    for (let x of operators){
        x.addEventListener('click', function(){
            currentOperatorName = x.id;
            console.log(currentOperatorName);
        });
    }
    let calculKeys = document.getElementsByClassName('valid');
    for (i = 0; i < calculKeys.length; i++) {
        let thisKey = calculKeys[i];
        thisKey.addEventListener('click', function () {
            if(finishedCalculation){
                display.value = '';
            }
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
                    //thisKey.style.border = "2px solid black"
                    //thisKey.style.backgroundColor = "#6E6E6E";
                    //setTimeout(function () {
                        //thisKey.style.border = "0.5px solid black";
                        //thisKey.style.backgroundColor = "gray";
                    }//, 100);
                }
            }
        //}
        display.focus();
    });
    let buttons = document.getElementsByClassName('calcul');
    for (let x of buttons){
        x.addEventListener('click',function(){
            x.style.border = "2px solid black"
            x.style.backgroundColor = "#6E6E6E";
            display.value = display.value + Number(x.innerHTML);
            setTimeout(function () {
                x.style.border = "0.5px solid black";
                x.style.backgroundColor = "gray";
            }, 100);
        });
    }
    
})