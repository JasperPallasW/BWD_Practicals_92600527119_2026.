// IF STATEMENTS = if a condition is true, execute some code. if not do something else

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){
    
    age = myText.value;
    age = Number(age);
    
    if(age >= 16){
        resultElement.textContent = `You are old enough to taking admission in university`;
    }
    else{
        resultElement.textContent = `You must be 16+ to taking admission in university`;
    }
}

