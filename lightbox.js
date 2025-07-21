const lightboxEnabled = document.querySelectorAll('.lightbox-enabled');
const lightboxArray = Array.from(lightboxEnabled);
const lastImage = lightboxArray.length -1;
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightbox-img');

const lightboxBtn = document.querySelectorAll('.lightbox-btn');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const exitBtn = document.querySelector('#exit');

let activeImage;

const showLightbox = () => {lightboxContainer.classList.add('active')}
const hideLightbox = () => {lightboxContainer.classList.remove('active')}

const setActiveImage = (image) => {
    lightboxImage.src = image.dataset.imagesrc;
    activeImage = lightboxArray.indexOf(image);
}

const transitionSlidesLeft = () => {
    activeImage === 0 ? setActiveImage(lightboxArray[lastImage]) : setActiveImage(lightboxArray[activeImage -1]);
}

const transitionSlidesRight = () => {
    activeImage === lastImage ? setActiveImage(lightboxArray[0]) : setActiveImage(lightboxArray[activeImage +1]);
}

const transitionSlideHandler = (moveItem) => {
    moveItem.includes('left') ? transitionSlidesLeft() : transitionSlidesRight();
}



lightboxEnabled.forEach(image => {
    image.addEventListener('click', (e) =>{
        showLightbox()
        setActiveImage(image)
    })
})

lightboxContainer.addEventListener('click', () => {hideLightbox()})
exitBtn.addEventListener('click', () => {hideLightbox()})

lightboxBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        transitionSlideHandler(e.currentTarget.id)
    })
})



window.addEventListener('keydown', (e) => {
    if(!lightboxContainer.classList.contains('active')) return;
    if(e.key.includes('Left') || e.key.includes('Right')) {
        e.preventDefault();
        transitionSlideHandler(e.key.toLowerCase());
    }
    if(e.key.includes('Escape')) {
        hideLightbox()
    }
})