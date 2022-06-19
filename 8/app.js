let maintext = document.querySelectorAll('.maintext')


maintext.forEach(x => {
    let mainBTN = x.querySelector('.far')
    console.log(mainBTN)
    x.addEventListener('click',()=>{
        x.parentElement.classList.toggle('open')
        if(mainBTN.classList =='far fa-plus-square'){
            mainBTN.classList = 'far fa-minus-square'
        }else{
            mainBTN.classList = 'far fa-plus-square'
        }

    })
    
});