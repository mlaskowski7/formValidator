const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


let isValid = false;
let passwordsMatch = false;

function validateForm(){
    // Constraint API
    isValid = form.checkValidity();

    if(!isValid){
        message.textContent = 'Please fill out all fields correctly';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    
    if(password1El.value === password2El.value){
        passwordsMatch = true;
        password1El.style.borderColor = 'dodgerblue';
        password2El.style.borderColor = 'dodgerblue';
    } else{
        passwordsMatch = false;
        message.textContent = 'Make sure that passwords match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }

    if(isValid && passwordsMatch){
        message.textContent = 'Successful registration!';
        message.style.color = 'dodgerblue';
        messageContainer.style.borderColor = 'dodgerblue';

    }
}

function storeFormData(){
    const user = {
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.calue,
    };
    console.log(user);
}

function processFormData(event){
    event.preventDefault();
    validateForm();
}


form.addEventListener('submit', processFormData);