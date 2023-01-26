// error message
var nameError = document.getElementById('name-error');
var passwordError = document.getElementById('password-error');
var confirmPasswordError = document.getElementById('confirm-password-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');

// name validation

function validateName(){
    var name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;

    }
    nameError.innerHTML = '';
    return true;
}


// password validation

function validatePassword(){
    var password = document.getElementById('password').value;

    if(password.length == 0){
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    if(!password.match(/^[A-Za-z]\w{7,14}$/)){
        passwordError.innerHTML = 'Password is not strong';
        return false;
}
    passwordError.innerHTML = '';
    return true;
}

// confirm password

function validateConfirmPassword(){
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if(password != confirmPassword){
        confirmPasswordError.innerHTML = 'Password doesnot match';
        return false;
    }

    confirmPasswordError.innerHTML = '';
    return true;
}



// email validation
function validateEmail(){

    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;

    }
    emailError.innerHTML = '';
    return true;

}

// phone number validation

function validatePhone(){
    var phone = document.getElementById('phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Phone number is required';
        return false;

    }
    phoneError.innerHTML = '';
    return true;

}

// registeration

function register(){
    alert('Registered Successfully!')
}