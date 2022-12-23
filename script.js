const emailInput = document.getElementById('email');
const errorIcon = document.getElementById('error_icon');
const invalidEmail = document.getElementById('invalid_email');
const button = document.getElementById('button');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;


button.addEventListener("click", function(){
    if(!emailRegex.test(emailInput.value)){
        console.log('email is invalid');
        invalidEmail.style.display = "block";
        errorIcon.style.display = 'block';
    }
    else {
        console.log('email is valid');
        invalidEmail.style.display = "none";
        errorIcon.style.display = 'none';
    }
})

