let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let clear = document.getElementById("clear");
let back = document.getElementById("Back");
let screenval = "";
let buttontext = "";
display.innerHTML="0"
Array.from(buttons).forEach((element)=>{
    element.addEventListener('click',function(event){
        buttontext = event.target.innerText;
        if(buttontext == "="){
            display.innerHTML = eval(screenval);
            screenval = eval(screenval);
        }
        else{
            screenval += buttontext;
            display.innerHTML = screenval;
        }
    })
})
clear.addEventListener('click',function(){
    screenval = "";
    display.innerHTML= 0;
})
back.addEventListener('click',function(){
    display.innerHTML= display.innerHTML.slice(0,-1);
    screenval = screenval.slice(0,-1);
    if(display.innerHTML == ""){
        display.innerHTML= "0";
        screenval = "";
    }
})