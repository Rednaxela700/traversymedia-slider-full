/**
 * Created by alexander on 24/07/2019.
 */
let sliderImages = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left'),
    current = 0;

//Clearing all images
function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}
//Initialize slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}
//Show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

//Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

