var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");
var cpasswordError = document.getElementById("cpassword-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");


function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0 ){
        nameError.innerHTML = 'Name is required'; 
        return false;
    }
    if(name.length < 5){
        nameError.innerHTML = 'Name cannot be less than 5 characters.';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }

    if(phone.length != 10){
        phoneError.innerHTML = 'Phone no. should be 10 digits';
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    if(phone == 1234567890){
        phoneError.innerHTML = 'Write valid Phone no.';
        return false;
    }
    
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Enter correct Email';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePassword(){
    var password = document.getElementById('contact-password').value;
    
    if(password.length == 0){
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    if(password == 'password'){
        passwordError.innerHTML = 'Password is not strong';
        return false;
    }
    if(password == document.getElementById('contact-name').value){
        passwordError.innerHTML = 'Password is not strong';
        return false;
    }
    if(password.length < 8){
        passwordError.innerHTML = 'Password is not strong';
        return false;
    }

    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateCPassword(){
    var cpassword = document.getElementById('contact-cpassword').value;
    
    if(cpassword.length == 0){
        cpasswordError.innerHTML = 'Password is required';
        return false;
    }
    if(cpassword == 'password'){
        cpasswordError.innerHTML = 'Password is not strong';
        return false;
    }
    if(cpassword == document.getElementById('contact-name').value){
        cpasswordError.innerHTML = 'Password is not strong';
        return false;
    }
    if(cpassword.length < 8){
        cpasswordError.innerHTML = 'Password inot strong';
        return false;
    }
    if(cpassword = document.getElementById('contact-password').value){
        cpasswordError.innerHTML = 'Passwords do not match';
        return false;
    }

    cpasswordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required-message.length;

    if(left>0){
        messageError.innerHTML = left +' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}


function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validatePhone() || !validatePassword() || !validateCPassword() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}