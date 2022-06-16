let num = document.getElementById("number")
const reset = document.getElementById('rest')
const dec = document.getElementById('dec')
const inc = document.getElementById('inc')
let value= 0

dec.addEventListener('click',function() {
    value--
    num.innerText = value
    checkcolor()
})

inc.addEventListener('click',function() {
    value++
    num.innerText = value
    checkcolor()
})

reset.addEventListener('click',function() {
    value=0
    num.textContent = 0
    checkcolor()
})

function checkcolor(){
    if(value>0){
        num.style.color="green"
    }else if (value<0) {
        num.style.color="red"
    } else {
        num.style.color="black"
    }
}