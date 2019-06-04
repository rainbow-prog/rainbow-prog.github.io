//modal
const modalOpen = document.querySelectorAll('.modal');
const modalClose = document.querySelector('.wrap i')
const modalWindow = document.querySelector('#modalOpen');
for(let i = 0; i < modalOpen.length; i++){
    modalOpen[i].addEventListener('click', () => {
        modalWindow.style.display = 'block';
    })
}
modalClose.addEventListener('click', ()=>{ 
    modalWindow.style.display = 'none';
})

//slider
const slides = document.querySelectorAll('.slider__item-content');
const leftArrow = document.querySelector('.btn__left');
const rightArrow = document.querySelector('.btn__right');
let current = 0;

function reset (){
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
}

function startSlide(){
    reset();
    slides[0].style.display = 'block';
}

function slideLeft(){
    reset();
    slides[current - 1].style.display = 'block'
    current--;
}

leftArrow.addEventListener('click', function(){
    if (current === 0) {
        current = slides.length;
    }
    slideLeft();
})

function slideRight(){
    reset();
    slides[current + 1].style.display = 'block'
    current++;
}

rightArrow.addEventListener('click', function(){
    if (current === slides.length - 1) {
        current = -1;
    }
    slideRight();
});


startSlide();
