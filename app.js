
function check (input,  regex, textError){
    input.addEventListener('input', function(e){
        checkerror(input, regex, textError);
    });
}


let validateInputs = {
    'name': {
        input: document.getElementById('name'),
        regex: /^[a-zA-Z]+$/,
        errorElement: document.getElementById("nameErrorText")
    },
    'lastname': {
        input: document.getElementById('lastname'),
        regex: /^[a-zA-Z]+$/,
        errorElement: document.getElementById("lastnameErrorText")
    },
    'email': {
        input: document.getElementById('email'),
        regex: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        errorElement: document.getElementById("emailErrorText")
    },
    'password': {
        input: document.getElementById('password'),
        regex: /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/,
        errorElement: document.getElementById("errorpassword")
    },
}
    

for(let key in validateInputs) {
    check(
        validateInputs[key].input, 
        validateInputs[key].regex, 
        validateInputs[key].errorElement);
}
let submitButton = document.getElementById('submit')

let form = document.querySelector(".formWithValidation")

form.addEventListener('submit', function (event) {
    event.preventDefault()
    let checkResult;
    let formIsGood =true
    for(let key in validateInputs) {
        checkResult = checkerror(
            validateInputs[key].input, 
            validateInputs[key].regex,    
            validateInputs[key].errorElement);
        if(checkResult=== false){
            formIsGood = false;
        }  
    }
if(formIsGood === true){
    let message = document.querySelector(".finish-word")
    message.hidden = false
    form.hidden = true
}
 

});
function checkerror (input, regex, textError){
    if(!input.value){
        input.classList.add("input-error");
        textError.hidden = false;
        return false;
    }
    else if (input.value.match(regex)) {
        input.classList.remove("input-error");
        textError.hidden = true;
        return true;
    }
    else{
        input.classList.add("input-error");
        textError.hidden = false;
        return false;
    }
    
    
}