let btn = document.getElementById('enter');
let inp = document.getElementById('input');
let guessNumb = Math.floor(Math.random() * 10) + 1;

btn.addEventListener('click', () => {
    if(inp.value){
        if(inp.value == guessNumb){
            alert('you win...')
            guessNumb = Math.floor(Math.random() * 10) + 1;
        }
        else if(inp.value < guessNumb){
            alert(`${inp.value} is less than random number`)
        }
        else if(inp.value > guessNumb){
            alert(`${inp.value} is more than random number`)
        }
        else if(typeof inp.value == 'string'){
            alert('please enter only number')
        }

        }
    else{
        alert('please enter number between 1-10')
    }
    console.log(guessNumb);
    inp.value = '';


})