const btn_burger = document.getElementById('burger');
const btn_close = document.getElementById('close');
const mobile_menu = document.getElementById('mobile_menu');
const main = document.querySelector('main');


btn_burger.addEventListener('click', function(e){
    mobile_menu.classList.remove('remove');
})
btn_close.addEventListener('click', function(e){
    mobile_menu.classList.add('remove');
})
main.addEventListener('click', function(e){
    mobile_menu.classList.add('remove');
})
function menuClose(){
    if(window.pageYOffset >= 72) mobile_menu.classList.add('remove');
    setTimeout(arguments.callee, 1);
}
menuClose();

/* slider */

const slide = document.querySelector('.slide');
const slideImages = document.querySelectorAll('.slide img');


//button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const btnUp = document.querySelector('.btnUp');

// counter
let counter = 1;
let size = slideImages[0].clientWidth;


slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//button Listeners

nextBtn.addEventListener('click', function(){
    if(counter >= slideImages.length - 1) return;
    size = slideImages[0].clientWidth;
    slide.style.transition = 'transform 600ms ease-in-out';
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})

prevBtn.addEventListener('click', function(){
    if(counter <= 0) return;
    size = slideImages[0].clientWidth;
    slide.style.transition = 'transform 600ms ease-in-out';
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})


slide.addEventListener('transitionend', function(){
    size = slideImages[0].clientWidth;
    if(slideImages[counter].id === 'lastClone'){
        slide.style.transition = 'none';
        counter = slideImages.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if(slideImages[counter].id === 'firstClone'){
        slide.style.transition = 'none';
        counter = slideImages.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
})

window.onload = function slider(){
    if(document.body.clientWidth <= 1024){
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        if(counter >= slideImages.length - 1) return;
        size = slideImages[0].clientWidth;
        slide.style.transition = 'transform 600ms ease-in-out';
        counter++;
        slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        //size = slideImages[0].clientWidth;

        if(slideImages[counter].id === 'firstClone'){
        slide.style.transition = 'transform 600ms ease-in-out';;
        counter = slideImages.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        }
        setTimeout(arguments.callee, 3700);
    }
    else {
        if(counter >= slideImages.length - 1) return;
        size = slideImages[0].clientWidth;
        slide.style.transition = 'transform 600ms ease-in-out';
        counter++;
        slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        //size = slideImages[0].clientWidth;

        if(slideImages[counter].id === 'firstClone'){
        slide.style.transition = 'transform 600ms ease-in-out';;
        counter = slideImages.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        }
        setTimeout(arguments.callee, 3700);
    }
}
/* Button Move Up*/

function moveUp(){
    if(window.pageYOffset >= 72) btnUp.classList.remove('remove');
    else btnUp.classList.add('remove');
    setTimeout(arguments.callee, 1);
}
moveUp();

/*Top Selling Section*/

const firstSell = document.querySelector('.first_sell');
const secondeSell = document.querySelector('.second_sell');
const thirdSell = document.querySelector('.third_sell');

const hoverFirst = document.querySelector('.hover_first');
const hoverSeconde = document.querySelector('.hover_seconde');
const hoverThird = document.querySelector('.hover_third');

firstSell.classList.add('remove');
secondeSell.classList.add('remove');
thirdSell.classList.add('remove');

function topSellingDispaly(){
    if(window.pageYOffset >= 800){
        firstSell.classList.remove('remove');
        secondeSell.classList.remove('remove');
        thirdSell.classList.remove('remove');
    }
    setTimeout(arguments.callee, 1);
}
topSellingDispaly();



/*for desktop*/
firstSell.addEventListener('mouseenter', function(){
    hoverSeconde.classList.add('selling_moveUp');
    hoverSeconde.classList.remove('selling_moveDown');
});
firstSell.addEventListener('mouseleave', function(){
    hoverSeconde.classList.remove('selling_moveUp');
    hoverSeconde.classList.add('selling_moveDown');
});

secondeSell.addEventListener('mouseenter', function(){
    hoverFirst.classList.add('selling_moveUp');
    hoverFirst.classList.remove('selling_moveDown');
});
secondeSell.addEventListener('mouseleave', function(){
    hoverFirst.classList.remove('selling_moveUp');
    hoverFirst.classList.add('selling_moveDown');
});

thirdSell.addEventListener('mouseenter', function(){
    hoverThird.classList.add('selling_moveUp');
    hoverThird.classList.remove('selling_moveDown');
});
thirdSell.addEventListener('mouseleave', function(){
    hoverThird.classList.remove('selling_moveUp');
    hoverThird.classList.add('selling_moveDown');
});

/*for mobile*/
firstSell.addEventListener('click', function(){
    hoverSeconde.classList.add('selling_moveUp');
    hoverSeconde.classList.remove('selling_moveDown');
});
firstSell.addEventListener('dblclick', function(){
    hoverSeconde.classList.remove('selling_moveUp');
    hoverSeconde.classList.add('selling_moveDown');
});

secondeSell.addEventListener('click', function(){
    hoverFirst.classList.add('selling_moveUp');
    hoverFirst.classList.remove('selling_moveDown');
});
secondeSell.addEventListener('dblclick', function(){
    
    hoverFirst.classList.remove('selling_moveUp');
    hoverFirst.classList.add('selling_moveDown');
});

thirdSell.addEventListener('click', function(){
    hoverThird.classList.add('selling_moveUp');
    hoverThird.classList.remove('selling_moveDown');
});
thirdSell.addEventListener('dblclick', function(){
    hoverThird.classList.remove('selling_moveUp');
    hoverThird.classList.add('selling_moveDown');
});