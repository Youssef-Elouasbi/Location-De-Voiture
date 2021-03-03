const btnForm = document.querySelector('form button');
const textName = document.querySelector('#textName');
const textEmail = document.querySelector('#textEmail');
const textTel = document.querySelector('#textTel');
const textMsg = document.querySelector('form textarea');
const headerText = document.querySelector('.form_title h1');
const headerForm = document.querySelector('.form_title');
const form = document.querySelector('form');


function doSub(){
    setTimeout(changeText, 1000);
    setTimeout(returnText, 6000);
    return false;
}
function changeText(){
    textEmail.value = '';
    textName.value = '';
    textTel.value = '';
    textMsg.value = '';
    headerText.innerHTML = 'Le Message A été Envoyé <i class="fas fa-smile-beam"></i>';
    headerForm.style.backgroundColor = 'rgba(172, 255, 47, 0.603)';
}

function returnText(){
    headerText.innerHTML = '<i class="fas fa-envelope"></i> Contactez-Nous';
    headerForm.style.backgroundColor = 'orange';
}
