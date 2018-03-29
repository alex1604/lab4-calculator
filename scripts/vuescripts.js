window.addEventListener('load', function(){
    let param1 = 0;
    let param2 = 0;
    let finishedCalculation = false;
    let clearInput = false;
    let currentOperatorName;
    
    let vm = new Vue({  // glöm inte window.load!
        el: '#container',
        data: { 
            number: '',
            isNotPressed: true,
            isPressed: false,
        },
        mounted:function(){
            this.focus() //method1 will execute at pageload
        },
        methods: {
            keypress: function(event){
                let myReg = /[0-9]/;
                String(this.number);
                if(myReg.exec(event.key)){
                    console.log('this key: ' + event.key)
                this.number += event.key;
                console.log(typeof(this.number));
                } else {
                    switch (event.key){
                        case '+':
                            currentOperatorName = 'addition';
                            break
                        case '-':
                            currentOperatorName = 'substraction';
                            break
                    }
                    param1 = Number(this.number);
                    this.number = '';
                    this.$refs.input.focus();
                }
            },
            square: function(event) {
                if(param1 != 0 && currentOperatorName != ''){
                    switch (currentOperatorName){
                        case 'division':
                            param1 /= Number(this.number);
                            param1 = Math.pow(param1,2);
                            break
                        case 'multiplication':
                            param1 *= Number(this.number);
                            param1 = Math.pow(param1,2);
                            break
                        case 'substraction':
                            param1 -= Number(this.number);
                            param1 = Math.pow(param1,2);
                            break
                        case 'addition':
                            param1 += Number(this.number);
                            param1 = Math.pow(param1,2);
                            break
                        case 'square':
                            param1 = Math.pow(param1,2);
                            break
                        case 'root':
                            param1 = Math.pow(param1,2);
                            break
                    }
                    this.number = param1;
                    clearInput = true;

                } else if (param1 == 0 || param1 == ''){
                    param1 = Number(this.number);
                    param1 = Math.pow(param1,2);
                    this.number = param1;
                    clearInput = true;
                }
                currentOperatorName = 'square';
                console.log('number cleared?: ' + this.number)
                finishedCalculation = true;
                this.$refs.input.focus();

                /*param1 = Number(this.number);  // this refererar till data-objektet
                this.number = String(Math.pow(param1,2));
                param1 = Number(this.number);
                finishedCalculation = true;
                clearInput = true;*/
            },
            root: function(event){
                if(param1 != 0 && currentOperatorName != ''){
                    switch (currentOperatorName){
                        case 'division':
                            param1 /= Number(this.number);
                            param1 = Math.sqrt(param1);
                            break
                        case 'multiplication':
                            param1 *= Number(this.number);
                            param1 = Math.sqrt(param1);
                            break
                        case 'substraction':
                            param1 -= Number(this.number);
                            param1 = Math.sqrt(param1);
                            break
                        case 'addition':
                            param1 += Number(this.number);
                            param1 = Math.sqrt(param1);
                            break
                        case 'square':
                            param1 = Math.sqrt(param1);
                            break
                        case 'root':
                            param1 = Math.sqrt(param1);
                            break
                    }
                    this.number = param1;
                    clearInput = true;

                } else if (param1 == 0 || param1 == ''){
                    param1 = Number(this.number);
                    param1 = Math.sqrt(param1);
                    this.number = param1;
                    clearInput = true;
                }
                currentOperatorName = 'root';
                console.log('number cleared?: ' + this.number)
                finishedCalculation = true;
                this.$refs.input.focus();
                /*param1 = Number(this.number);
                this.number = String(Math.sqrt(param1));
                param1 = Number(this.number);
                finishedCalculation = true;
                clearInput = true;*/
            },
            division: function(event){
                if(param1 != 0 && currentOperatorName != ''){
                    switch (currentOperatorName){
                        case 'division':
                            param1 /= Number(this.number);
                            break
                        case 'multiplication':
                            param1 *= Number(this.number);
                            break
                        case 'substraction':
                            param1 -= Number(this.number);
                            break
                        case 'addition':
                            param1 += Number(this.number);
                            break
                    }
                    this.number = param1;
                    clearInput = true;
                    currentOperatorName = 'division';
                console.log('param1: ' + param1);
                } else if (param1 == 0 || param1 == ''){
                    param1 = Number(this.number);
                    currentOperatorName = 'division';
                    this.number = "";
                }
                console.log('number cleared?: ' + this.number)
                finishedCalculation = false;
                this.$refs.input.focus();
            },
            multiplication: function(event){
                if(param1 != 0 && currentOperatorName != ''){
                    switch (currentOperatorName){
                        case 'division':
                            param1 /= Number(this.number);
                            break
                        case 'multiplication':
                            param1 *= Number(this.number);
                            break
                        case 'substraction':
                            param1 -= Number(this.number);
                            break
                        case 'addition':
                            param1 += Number(this.number);
                            break
                    }
                    this.number = param1;
                    clearInput = true;
                    currentOperatorName = 'multiplication';
                    console.log('param1: ' + param1);
                 } else if (param1 == 0 || param1 == ''){
                    param1 = Number(this.number);
                    currentOperatorName = 'multiplication';
                    this.number = "";
                }
                finishedCalculation = false;
                this.$refs.input.focus();
            },
            substraction: function(event){
                if(param1 != 0 && currentOperatorName != ''){
                    switch (currentOperatorName){
                        case 'division':
                            param1 /= Number(this.number);
                            break
                        case 'multiplication':
                            param1 *= Number(this.number);
                            break
                        case 'substraction':
                            param1 -= Number(this.number);
                            break
                        case 'addition':
                            param1 += Number(this.number);
                            break
                    }
                    this.number = param1;
                    clearInput = true;
                    currentOperatorName = 'substraction';
                 } else if (param1 == 0 || param1 == ''){
                    param1 = Number(this.number);
                    currentOperatorName = 'substraction';
                    this.number = "";
                }
                finishedCalculation = false;
                this.$refs.input.focus();
            },
            addition: function(event){
                if(param1 != 0 && currentOperatorName != ''){
                    switch (currentOperatorName){
                        case 'division':
                            param1 /= Number(this.number);
                            break
                        case 'multiplication':
                            param1 *= Number(this.number);
                            break
                        case 'substraction':
                            param1 -= Number(this.number);
                            break
                        case 'addition':
                            param1 += Number(this.number);
                            break
                    }
                    this.number = param1;
                    clearInput = true;
                    currentOperatorName = 'addition';
                    console.log('param1: ' + param1);
                 } else if (param1 == 0 || param1 == ''){
                    param1 = Number(this.number);
                    currentOperatorName = 'addition';
                    this.number = "";
                }
                finishedCalculation = false;
                this.$refs.input.focus();
            },

            result: function(event) {
                param2 = Number(this.number);
                switch (currentOperatorName){
                    case 'division':
                        this.number = param1/param2;
                        break
                    case 'multiplication':
                        this.number = param1*param2;
                        break
                    case 'substraction':
                        this.number = param1 - param2;
                        break
                    case 'addition':
                        this.number = param1 + param2;
                        break
                }
                currentOperatorName = '';
                finishedCalculation = true;
                this.$refs.input.focus();
                param1 = 0;
                param2 = 0;
            },
            clear: function(event){
                param1 = 0;
                param2 = 0;
                this.number = '';
                this.$refs.input.focus();
            },
            pressclear: function(event){
                if(finishedCalculation){
                    this.number = '';
                    finishedCalculation = false;
                    console.log('clear finishCalculation');
                } else if(clearInput && this.number != ''){
                    this.number = '';
                    clearInput = false;
                    console.log('clear clearInput');
                } 
                else {
                    this.$refs.input.focus();
                }
            },
            focus: function(event){
                this.$refs.input.focus();
            },
        }
    }); 
});