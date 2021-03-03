const btnForm = document.querySelector('form button');
const textName = document.querySelector('#textName');
const textLastName = document.querySelector('#textLastName');
const textEmail = document.querySelector('#textEmail');
const textTel = document.querySelector('#textTel');
const textPass = document.querySelector('#textPass');
const textPass2 = document.querySelector('#textPass2');
const textError = document.querySelector('.textError');
const headerText = document.querySelector('.form_title h1');
const headerForm = document.querySelector('.form_title');
const form = document.querySelector('form');


function doSub(){
    setTimeout(changeText, 1000);
    setTimeout(returnText, 5000);
    return false;
}
function changeText(){
        textEmail.value = '';
        textPass.value = '';
        headerForm.style.width = '32%';
        headerForm.style.fontSize = '18px';
        headerText.innerHTML = 'Bienvenue <i class="fas fa-smile-beam"></i>';
        headerForm.style.backgroundColor = 'rgba(172, 255, 47, 0.603)';
        form.style.border = '2px solid rgba(172, 255, 47, 0.603)'
    
}

function returnText(){
    if(window.innerWidth <= 1024){
        headerText.innerHTML = '<i class="fas fa-user"></i>';
        headerForm.style.backgroundColor = 'orange';
        headerForm.style.Color = 'white';
        headerForm.style.width = '20%';
        headerForm.style.fontSize = '16px';
        form.style.border = '2px solid orange'
    }
    if(window.innerWidth <= 414){
        headerText.innerHTML = '<i class="fas fa-user"></i>';
        headerForm.style.backgroundColor = 'orange';
        headerForm.style.Color = 'white';
        headerForm.style.width = '30%';
        headerForm.style.fontSize = '16px';
        form.style.border = '2px solid orange'
    }
    else{
        headerText.innerHTML = '<i class="fas fa-user"></i>';
        headerForm.style.backgroundColor = 'orange';
        headerForm.style.Color = 'white';
        headerForm.style.width = '10%';
        headerForm.style.fontSize = '16px';
        form.style.border = '2px solid orange'
    }
}
