let btnClose = document.getElementById('clsbtn')
let article = document.getElementById('mainside')
let firstbtn = document.getElementById('first-toggle')
let sectbtn = document.getElementById('sec-toggle')
let side =document.getElementById('side-tgl')
let firstbtn_display = firstbtn.style.display
let secbtn_display = sectbtn.style.display
let firstbtn_padding = firstbtn.style.padding

btnClose.addEventListener('click', ()=>{
    article.classList.toggle('sidebar-on')
    firstbtn.style.display="flex"
    side.style.padding = "10px"
})

firstbtn.addEventListener('click', ()=>{
    firstbtn.style.display="none"
    side.style.padding = 0
    article.classList.toggle('sidebar-on')
} )
