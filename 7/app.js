let firstBTN = document.getElementById('first')
let secBTN = document.getElementById('second')
let modalmain = document.getElementById('third')

firstBTN.addEventListener('click',()=>{
    openorclose()
})

secBTN.addEventListener('click',()=>{
    openorclose()
})

function openorclose(){
    modalmain.classList.toggle('modal-show')
}