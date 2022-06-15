const color = document.getElementById('color-info')
const btn = document.getElementById("butn")
const rangec = ['red','green','blue','rgb(144,25,98)','#1eb462']

btn.addEventListener('click',function(){
    const randnum=rangec[Math.floor(Math.random() * 4)]
    document.body.style.backgroundColor=randnum
    color.innerText=randnum
})