const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');

const card1Img = document.querySelector('.card1 img');
const card2Img = document.querySelector('.card2 img');
const card3Img = document.querySelector('.card3 img');
const card4Img = document.querySelector('.card4 img');

const card1Title = document.querySelector('.card1 h1');
const card2Title = document.querySelector('.card2 h1');
const card3Title = document.querySelector('.card3 h1');
const card4Title = document.querySelector('.card4 h1');

const cardText1 = document.querySelector('.card1 .contentText');
const cardText2 = document.querySelector('.card2 .contentText');
const cardText3 = document.querySelector('.card3 .contentText');
const cardText4 = document.querySelector('.card4 .contentText');



card1.addEventListener('mouseenter', function(){
    cardText1.classList.remove('removeDisplay');
    card1Img.style.transform = 'translateY(-40px)';
    card1Title.style.transform = 'translateY(-40px)';
})
card1.addEventListener('mouseleave', function(){
    cardText1.classList.add('removeDisplay');
    card1Img.style.transform = 'translateY(0px)';
    card1Title.style.transform = 'translateY(0px)';
})
card2.addEventListener('mouseenter', function(){
    cardText2.classList.remove('removeDisplay');
    card2Img.style.transform = 'translateY(-40px)';
    card2Title.style.transform = 'translateY(-40px)';
})
card2.addEventListener('mouseleave', function(){
    cardText2.classList.add('removeDisplay');
    card2Img.style.transform = 'translateY(0px)';
    card2Title.style.transform = 'translateY(0px)';
})
card3.addEventListener('mouseenter', function(){
    cardText3.classList.remove('removeDisplay');
    card3Img.style.transform = 'translateY(-40px)';
    card3Title.style.transform = 'translateY(-40px)';
})
card3.addEventListener('mouseleave', function(){
    cardText3.classList.add('removeDisplay');
    card3Img.style.transform = 'translateY(0px)';
    card3Title.style.transform = 'translateY(0px)';
})
card4.addEventListener('mouseenter', function(){
    cardText4.classList.remove('removeDisplay');
    card4Img.style.transform = 'translateY(-40px)';
    card4Title.style.transform = 'translateY(-40px)';
})
card4.addEventListener('mouseleave', function(){
    cardText4.classList.add('removeDisplay');
    card4Img.style.transform = 'translateY(0px)';
    card4Title.style.transform = 'translateY(0px)';
})

/* for mobile */

card1.addEventListener('click', function(){
    cardText1.classList.remove('removeDisplay');
    card1Img.style.transform = 'translateY(-40px)';
    card1Title.style.transform = 'translateY(-40px)';
})
card1.addEventListener('dblclick', function(){
    cardText1.classList.add('removeDisplay');
    card1Img.style.transform = 'translateY(0px)';
    card1Title.style.transform = 'translateY(0px)';
})
card2.addEventListener('click', function(){
    cardText2.classList.remove('removeDisplay');
    card2Img.style.transform = 'translateY(-40px)';
    card2Title.style.transform = 'translateY(-40px)';
})
card2.addEventListener('dblclick', function(){
    cardText2.classList.add('removeDisplay');
    card2Img.style.transform = 'translateY(0px)';
    card2Title.style.transform = 'translateY(0px)';
})
card3.addEventListener('click', function(){
    cardText3.classList.remove('removeDisplay');
    card3Img.style.transform = 'translateY(-40px)';
    card3Title.style.transform = 'translateY(-40px)';
})
card3.addEventListener('dblclick', function(){
    cardText3.classList.add('removeDisplay');
    card3Img.style.transform = 'translateY(0px)';
    card3Title.style.transform = 'translateY(0px)';
})
card4.addEventListener('click', function(){
    cardText4.classList.remove('removeDisplay');
    card4Img.style.transform = 'translateY(-40px)';
    card4Title.style.transform = 'translateY(-40px)';
})
card4.addEventListener('dblclick', function(){
    cardText4.classList.add('removeDisplay');
    card4Img.style.transform = 'translateY(0px)';
    card4Title.style.transform = 'translateY(0px)';
})

/* btn for move up*/
function moveUp(){
    if(window.pageYOffset >= 112) btnUp.classList.remove('remove');
    else btnUp.classList.add('remove');
    setTimeout(arguments.callee, 1);
}
moveUp();
