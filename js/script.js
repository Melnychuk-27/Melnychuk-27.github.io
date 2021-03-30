
// Burger 
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}
const menuLinks = document.querySelectorAll('.menu__link[href]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", () => {
            if(iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
        });
    });
}


// scroll
$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

let works__card = document.querySelectorAll('.works__card');
const btn__worksBottom = document.querySelector('.btn__works-bottom');
let index = -1;
btn__worksBottom.addEventListener("click", () => {
    if (index == -1) { 
        for(card of works__card) {
            card.classList.add('active__card');
            index++;
        }
    }
    else { 
        for(card of works__card) {
            card.classList.remove('active__card');
            index--;
        }
    }
    // btn__worksBottom.classList.add('active__card');
})


// Modal

// const btn__calls = document.querySelectorAll('.btn__call');
// const btn__promo = document.querySelector('.btn__promo');
// const btns__send = document.querySelectorAll('.btn__send');
// const consultation = document.querySelector('#consultation');
// const thanks = document.querySelector('#thanks');
// const overlay = document.querySelector('.overlay');
// const modal__closes = document.querySelectorAll('.modal__close');
// const detail = document.querySelector('#detail');
// const сalculation = document.querySelector('#сalculation');


// if (modal__closes.length > 0) {
//     modal__closes.forEach(modal__close => {
//         modal__close.addEventListener("click", () => {
//             overlay.style.display = "none";
//             consultation.style.display = "none";
//             thanks.style.display = "none";
//             detail.style.display = "none";
//             сalculation.style.display = "none";
//         });
//     });
// }

// if (btns__send.length > 0) {
//     btns__send.forEach(btn__send => {
//         btn__send.addEventListener("click", () => {
//             thanks.style.display = "block";
//             detail.style.display = "none";
//             consultation.style.display = "none";
//             сalculation.style.display = "none";
//             overlay.style.display = "block";
//         });
//     });
// }

// if (btn__calls.length > 0) {
//     btn__calls.forEach(btn__call => {
//         btn__call.addEventListener("click", () => {
//             сalculation.style.display = "none";
//             thanks.style.display = "none";
//             detail.style.display = "none";
//             consultation.style.display = "block";
//             overlay.style.display = "block";
//         });
//     });
// }

// btn__promo.addEventListener("click", () => {
//     thanks.style.display = "none";
//     detail.style.display = "none";
//     consultation.style.display = "none";
//     сalculation.style.display = "block";
//     overlay.style.display = "block";
    
// });

// Slider
// const slide_left = document.querySelector('.arrow__left');
// const slide_right = document.querySelector('.arrow__right');
// let slides = document.querySelectorAll('.carusel__item');
//     let idx = 0; // Индекс текущего слайда.

// let index = 0;

// const activeSlide = n => {
//     for(slide of slides) {
//         slide.classList.remove('active');
//     }
//     slides[n].classList.add('active');
// }

// const nextSlide = () => {
//     if(index == slides.length - 1){
//         index = 0;
//         activeSlide(index);
//     } else {
//         index++;
//         activeSlide(index);
//     }
// }

// const prevSlide = () => {
//     if(index == 0){
//         index = slides.length - 1;
//         activeSlide(index);
//     } else {
//         index--;
//         activeSlide(index);
//     }
// }
// slide_left.addEventListener('click', prevSlide);
// slide_right.addEventListener('click', nextSlide);


// $('[data-modal=thanks]').on('click', function() {
//     $('.overlay, #thanks').fadeIn('slow');
// });
// $('[data-modal=consultation]').on('click', function() {
//     $('.overlay, #consultation').fadeIn('slow');
// });
// $('.modal__close').on('click', function() {
//     $('.overlay, #consultation, #thanks').fadeOut('slow');
// });
// $('[data-modal=detail]').each(function(i) {
//     $(this).on('click', function() {
//         $('#detail .modal__subtitle').text($('.card__title').eq(i).text())
//         $('.overlay, #detail').fadeIn('slow');
//     })
// })