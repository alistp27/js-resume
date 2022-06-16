let hover = document.getElementById("box")
let button = document.getElementById('btn')
let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')
let body = document.body

hover.addEventListener('mousemove',changecolor2)

function changecolor2(e){
let num = Math.floor(Math.random()*100)
    body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+","+num+")"
    console.log(e.type)
    
}


function changecolor(){
    body.style.backgroundColor="rgb("+first.value+","+second.value+","+third.value+")";
    console.log("hi")
    console.log(first)
    console.log(second)
    console.log(third)
}