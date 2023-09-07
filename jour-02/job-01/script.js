const html =document.querySelector("html");
console.log("bonjour");

function myChangeBackgroundColor(){

    if(window.innerWidth >= 1337 ){
        html.style.backgroundColor="#ffb703"
    }
    else if(window.innerWidth >505 && window.innerWidth<1336){
        html.style.backgroundColor="#d90429"
    }
    else if(window.innerWidth<504){
        html.style.backgroundColor="#003049"
    }

}

myChangeBackgroundColor();

window.addEventListener("resize",myChangeBackgroundColor)