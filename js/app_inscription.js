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
    setTimeout(returnText, 6500);
    return false;
}
function changeText(){
    if(textPass.value === textPass2.value){
        textError.classList.add('remove');
        textEmail.value = '';
        textName.value = '';
        textLastName.value = '';
        textTel.value = '';
        textPass.value = '';
        textPass2.value = '';
        headerForm.style.width = '32%';
        headerForm.style.fontSize = '11px';
        headerText.innerHTML = 'Vous Avez Créé Un Nouveau Compte <i class="fas fa-smile-beam"></i>';
        headerForm.style.backgroundColor = 'rgba(172, 255, 47, 0.603)';
        form.style.border = '2px solid rgba(172, 255, 47, 0.603)'
    }
    else{
        textError.classList.remove('remove');
    }
    
}

function returnText(){
    if(window.innerWidth <= 1024){
        headerText.innerHTML = '<i class="fas fa-user-plus"></i>';
        headerForm.style.backgroundColor = 'orange';
        headerForm.style.Color = 'white';
        headerForm.style.width = '20%';
        headerForm.style.fontSize = '16px';
        form.style.border = '2px solid orange'
    }
    if(window.innerWidth <= 414){
        headerText.innerHTML = '<i class="fas fa-user-plus"></i>';
        headerForm.style.backgroundColor = 'orange';
        headerForm.style.Color = 'white';
        headerForm.style.width = '30%';
        headerForm.style.fontSize = '16px';
        form.style.border = '2px solid orange'
    }
    else{
        headerText.innerHTML = '<i class="fas fa-user-plus"></i>';
        headerForm.style.backgroundColor = 'orange';
        headerForm.style.Color = 'white';
        headerForm.style.width = '10%';
        headerForm.style.fontSize = '16px';
        form.style.border = '2px solid orange'
    }
}
