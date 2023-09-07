let paragraphe = document.querySelector('#count-displayer')
let bouton = document.querySelector('#add-count-btn')
let count = 0


function myAddCount(){
    count ++
    paragraphe.innerHTML = count
}

bouton.addEventListener("click", myAddCount)