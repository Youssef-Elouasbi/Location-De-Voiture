const numberOne = document.querySelector('.second_content .content1 p');
const numberTwo = document.querySelector('.second_content .content2 p');
const numberThr = document.querySelector('.second_content .content3 p');

function incrementNumber(){
    if(window.pageYOffset >= 102){
        if(parseInt(numberOne.innerText) < 1023){
            let number1 = parseInt(numberOne.innerText);
            number1 = number1 + 3;
            numberOne.innerText =  number1;
        }
        if(parseInt(numberTwo.innerText) < 75){
            let number2 = parseInt(numberTwo.innerText);
            number2 = number2 + 1;
            numberTwo.innerText =  number2;
        }
        if(parseInt(numberThr.innerText) < 1233){
            let number3 = parseInt(numberThr.innerText);
            number3 = number3 + 3;
            numberThr.innerText =  number3;
        }
    }
}
setInterval(incrementNumber, 1);



// setInterval(incrementNumber, 100);



function moveUp(){
    if(window.pageYOffset >= 112) btnUp.classList.remove('remove');
    else btnUp.classList.add('remove');
    setTimeout(arguments.callee, 1);
}
moveUp();

