const bnts = document.querySelectorAll('.question-btn')
const questions = document.querySelectorAll('.question')
console.log(questions)

questions.forEach(x => {
    x.addEventListener('click',()=>{
        x.classList.toggle('open')
        console.log('HI')
    })
    
});