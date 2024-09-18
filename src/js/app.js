const inputName = document.querySelector('#fname');
const inputEmail = document.querySelector('#femail');
const inputTextarea = document.querySelector('#ftextarea');

const btnForm = document.querySelector('#form__btn');

const messageFname = document.querySelector('#message__fname');
const messageFemail = document.querySelector('#message__femail');
const messageFtextarea = document.querySelector('#message__ftextarea');

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexName = /^[a-zA-Z\s]*$/;

let readyFname = false;
let readyFemail = false;
let readyFtextarea = false;

function checkTextarea() {
    if (inputTextarea.value.length < 10) {
        messageFtextarea.classList.remove('text-correct-color');
        messageFtextarea.classList.add('text-error-color');

        messageFtextarea.innerHTML = '*Describe lo que vamos a construir.';

        readyFtextarea = false;
    } else {
        messageFtextarea.classList.remove('text-error-color');
        messageFtextarea.classList.add('text-correct-color');

        messageFtextarea.innerHTML = '*Mensaje válido.';
        readyFtextarea = true;
    }
}

function checkEmail() {
    if (!regexEmail.test(inputEmail.value)) {
        messageFemail.classList.remove('text-correct-color');
        messageFemail.classList.add('text-error-color');

        messageFemail.innerHTML = "*Por favor, ingresa un correo electrónico válido.";
        
        readyFemail = false;
    } else {
        messageFemail.classList.remove('text-error-color');
        messageFemail.classList.add('text-correct-color');

        messageFemail.innerHTML = "*Correo válido.";
        readyFemail = true;
    }
}

function checkName(){
    if (inputName.value.length < 10 || inputName.value.length > 50) {
        messageFname.classList.remove('text-correct-color');
        messageFname.classList.add('text-error-color');

        messageFname.innerHTML = '*El nombre debe tener entre 10 y 50 letras.';

        readyFname = false;
    } else {
        if (!regexName.test(inputName.value)) {
            messageFname.classList.remove('text-correct-color');
            messageFname.classList.add('text-error-color');

            messageFname.innerHTML = '*El nombre no debe tener caracteres diferentes a letras.';

            readyFname = false;
        } else {
            messageFname.classList.remove('text-error-color');
            messageFname.classList.add('text-correct-color');

            messageFname.innerHTML = '*Nombre válido.';
            readyFname = true;
        }
    }
}

function checkForm() {
    checkName();
    checkEmail();
    checkTextarea();

    if(!readyFname || !readyFemail || !readyFtextarea){
        btnForm.classList.add('disabled__btn')
        btnForm.classList.remove('able__btn')
        console.log('disabled', readyFemail, readyFname, readyFtextarea)

        btnForm.addEventListener('click', ()=>{
            btnForm.disabled = true;
        })
    }else {
        console.log('able', readyFemail, readyFname, readyFtextarea)
        btnForm.classList.remove('disabled__btn')
        btnForm.classList.add('able__btn')
    }

}

setInterval(checkForm, 500);