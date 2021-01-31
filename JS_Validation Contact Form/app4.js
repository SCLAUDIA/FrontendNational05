var form = document.getElementById('form');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var message = document.getElementById('message');
var thankYouMsg = document.querySelector('.thank-you-msg');
// console.log(thankYouMsg);
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validateInputs();
// });

// function for valid inputs
function validateInputs(){
    var firstNameValue = firstName.value;
    var lastNameValue = lastName.value;
    var messageValue = message.value;
   
    var letters = /^[A-Za-z]+$/;

        if (!firstNameValue.match(letters) || firstNameValue === '' || firstNameValue.length > 10){
            showErrorMessage(firstName, 'Please insert a valid name!')
        }else{
            showSuccessMessage(firstName);
        };

        if (!lastNameValue.match(letters) || lastNameValue === '' || lastNameValue.length > 10){
            showErrorMessage(lastName, 'Please insert a valid name!')
        }else{
            showSuccessMessage(lastName);
        };

        if (messageValue.match(letters) || messageValue === ''){
            showErrorMessage(message, 'Valid message required!')
        }else{
            showSuccessMessage(message) 
        } 
    }
    
// function for error message
function showErrorMessage (input, message) {
    var formWrap = input.parentElement;
    var small = formWrap.querySelector('small');

    small.innerText = message;
    formWrap.className = 'form-wrap error';
}

// function for success message
function showSuccessMessage(input){
    var formWrap = input.parentElement;
    formWrap.className = 'form-wrap success';
}

// function for showing the Thank you message, on submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
    var firstNameValue = firstName.value;
    var lastNameValue = lastName.value;
    var messageValue = message.value;
    var letters = /^[A-Za-z]+$/;

    if(firstName.value && lastName.value && message.value){
        thankYouMsg.classList.remove("hidden");
        
    }

    if(!firstName.value && lastName.value && message.value){
        thankYouMsg.classList.add("hidden");
    }

    if(firstName.value && !lastName.value && message.value){
        thankYouMsg.classList.add("hidden");
    }

    if(firstName.value && lastName.value && !message.value){
        thankYouMsg.classList.add("hidden");
    }
    if (!firstName.value.match(letters) || firstName.value === '' || firstName.value.length > 10){
        thankYouMsg.classList.add("hidden");
    }
    if (!lastName.value.match(letters) || lastName.value === '' || lastName.value.length > 10){
        thankYouMsg.classList.add("hidden");
    }

    if (message.value.match(letters) || message.value === ''){
        thankYouMsg.classList.add("hidden")
    }

    });

// Appearing the user name input, in the thank you message
    var firstName = document.getElementById('firstName');
    var showName = document.getElementById('namehere');
    var submit = document.getElementById('submitbutton');

    window.onload = function() {
    submit.onclick = function() {
    showName.innerHTML = firstName.value
  }
} 
   


