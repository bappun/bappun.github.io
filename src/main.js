import Siema from 'siema';

let isLtMd = false;
let carousels = [];
let carouselSelectors = ['#skills-list', '#languages-list', '#hobbies-list'];

function viewportSizeCheck() {
    let wasLtMd = isLtMd;
    isLtMd = window.innerWidth < 768;

    if (wasLtMd !== isLtMd) {
        deleteCarousels();
        createCarousels();
    }
}

function printSlideIndex() {
    let listIndex = document.querySelectorAll('#' + this.selector.id + '-index > span');
    for (let i = 0; i < listIndex.length; i++) {
        listIndex[i].classList.remove('current');
        if (i === this.currentSlide) listIndex[i].classList.add('current');
    }
}

function createCarousels() {
    for (let i = 0; i < carouselSelectors.length; i++) {
        carousels.push(
            new Siema({
                onInit: printSlideIndex,
                onChange: printSlideIndex,
                selector: carouselSelectors[i],
                perPage: {
                    768: 3
                },
                draggable: isLtMd
            })
        );
    }
}

function deleteCarousels() {
    for (let i = 0; i < carousels.length; i++) {
        carousels[i].destroy(true);
    }
}

window.onresize = viewportSizeCheck;

document.addEventListener('DOMContentLoaded', function() {
    isLtMd = window.innerWidth < 768;
    createCarousels();
}, false);