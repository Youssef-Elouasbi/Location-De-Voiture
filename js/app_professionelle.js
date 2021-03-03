const cartCar1 = document.querySelector('.carCard1 .theCard');
const cartCar2 = document.querySelector('.carCard2 .theCard');
const cartCar3 = document.querySelector('.carCard3 .theCard');
const cartCar4 = document.querySelector('.carCard4 .theCard');
const backFace = document.querySelector('.theCard .theCard .backFace');

cartCar1.addEventListener('mouseenter', function(){
    cartCar1.style.transform = 'rotateY(180deg)';
});
cartCar1.addEventListener('mouseleave', function(){
    cartCar1.style.transform = 'rotateY(360deg)';
})
cartCar2.addEventListener('mouseenter', function(){
    cartCar2.style.transform = 'rotateY(180deg)';
});
cartCar2.addEventListener('mouseleave', function(){
    cartCar2.style.transform = 'rotateY(360deg)';
})
cartCar3.addEventListener('mouseenter', function(){
    cartCar3.style.transform = 'rotateY(180deg)';
});
cartCar3.addEventListener('mouseleave', function(){
    cartCar3.style.transform = 'rotateY(360deg)';
})
cartCar4.addEventListener('mouseenter', function(){
    cartCar4.style.transform = 'rotateY(180deg)';
});
cartCar4.addEventListener('mouseleave', function(){
    cartCar4.style.transform = 'rotateY(360deg)';
})
/*for mobile */

cartCar1.addEventListener('click', function(){
    cartCar1.style.transform = 'rotateY(180deg)';
});
cartCar1.addEventListener('dblclick', function(){
    cartCar1.style.transform = 'rotateY(360deg)';
})
cartCar2.addEventListener('click', function(){
    cartCar2.style.transform = 'rotateY(180deg)';
});
cartCar2.addEventListener('dblclick', function(){
    cartCar2.style.transform = 'rotateY(360deg)';
})
cartCar3.addEventListener('click', function(){
    cartCar3.style.transform = 'rotateY(180deg)';
});
cartCar3.addEventListener('dblclick', function(){
    cartCar3.style.transform = 'rotateY(360deg)';
})
cartCar4.addEventListener('click', function(){
    cartCar4.style.transform = 'rotateY(180deg)';
});
cartCar4.addEventListener('dblclick', function(){
    cartCar4.style.transform = 'rotateY(360deg)';
})