const signUpBtn = document.querySelector('.signup-btn');
const signInBtn = document.querySelector('.signin-btn');
let formWrapper = document.querySelector('.forms-wrapper');


signUpBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    formWrapper.classList.add('change')
})
signInBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    formWrapper.classList.remove('change')
})