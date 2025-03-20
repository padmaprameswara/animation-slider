const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// autoplay slider
let runAutoPlay = setTimeout(function () {
    next.click()
}, 8000);

// next and prev 
next.addEventListener('click', function () {
    initSlider('next');
});
prev.addEventListener('click', function () {
    initSlider('prev');
});

const initSlider = function (type) {
    const sliderItems = list.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');
    if (type === 'next') {
        list.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');

    } else {
        const lastItemPosition = sliderItems.length - 1;
        list.prepend(sliderItems[lastItemPosition]);
        thumbnail.prepend(thumbnailItems[lastItemPosition]);
        slider.classList.add('prev');
    }
    setTimeout(function () {
        slider.classList.remove('next')
        slider.classList.remove('prev')
    }, 2000);
    clearTimeout(runAutoPlay);
    runAutoPlay = setTimeout(function () {
        next.click()
    }, 8000)
};