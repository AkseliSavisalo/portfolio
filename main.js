// Parallax
let projectBackground = document.getElementById('project-background')
let mobileProjectBackground = document.getElementById('mobile-project-background')
let heroContent = document.getElementById('hero-content')
let overlay1 = document.getElementById('overlay1')
let overlay2 = document.getElementById('overlay2')
let overlay3 = document.getElementById('overlay3')
let overlay4 = document.getElementById('overlay4')
let overlay5 = document.getElementById('overlay5')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    projectBackground.style.top = value * 0.4 + 'px';
    mobileProjectBackground.style.top = value * 0.4 + 'px';
    heroContent.style.top = value * 0.85 + 'px';
    overlay1.style.top = value * 0.9 + 'px';
    overlay2.style.top = value * 0.8 + 'px';
    overlay3.style.top = value * 0.6 + 'px';
    overlay4.style.top = value * 0.3 + 'px';
    overlay5.style.top = value * 0 + 'px';
})


// Open images fullscreen
document.onclick = (event) => {
    if (document.fullscreenElement) {
      document
        .exitFullscreen()
}}

// Mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuButtonHome = document.querySelector('.mobile-menu-button-home');
    const mobileMenuButtonPortfolio = document.querySelector('.mobile-menu-button-portfolio');
    const line1 = document.querySelector('.hamburger-line1');
    const line2 = document.querySelector('.hamburger-line2');
    const line3 = document.querySelector('.hamburger-line3');

    hamburgerButton.addEventListener('click', () => 
        mobileMenu.classList.toggle('active') &
        line1.classList.toggle('active') &
        line2.classList.toggle('active') &
        line3.classList.toggle('active'))

    mobileMenuButtonHome.addEventListener('click', () => 
        mobileMenu.classList.toggle('active') &
        line1.classList.toggle('active') &
        line2.classList.toggle('active') &
        line3.classList.toggle('active'))

    mobileMenuButtonPortfolio.addEventListener('click', () => 
        mobileMenu.classList.toggle('active') &
        line1.classList.toggle('active') &
        line2.classList.toggle('active') &
        line3.classList.toggle('active'))
})



// Video player
/*
const videoPlayer = document.querySelector('.video-player')
const galleryVideo = videoPlayer.querySelector('.gallery-video')
const playButton = videoPlayer.querySelector('.play-button')
const volume = videoPlayer.querySelector('.volume')
const currentTimeElement = videoPlayer.querySelector('.current')
const durationTimeElement = videoPlayer.querySelector('.duration')

// Play & pause
playButton.addEventListener('click', (e) => {
    if(galleryVideo.paused){
        galleryVideo.play()
        e.target.textContent = '//'}
    else {
        galleryVideo.pause()
        e.target.textContent = '>'}
})

galleryVideo.addEventListener('click', () => {
    if(galleryVideo.paused){
        galleryVideo.play()
        playButton.textContent = '//'} 
    else {
        galleryVideo.pause()
        playButton.textContent = '>'}
})

// Volume
volume.addEventListener('mousemove', (e) => {
    galleryVideo.volume = e.target.value
})

// Duration
const currentTime = () => {
    let currentMinutes = Math.floor(galleryVideo.currentTime / 60)
    let currentSeconds = Math.floor(galleryVideo.currentTime - currentMinutes * 60)
    let durationMinutes = Math.floor(galleryVideo.duration / 60)
    let durationSeconds = Math.floor(galleryVideo.duration - durationMinutes * 60)

    currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
    durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds < 10 ? '0'+durationSeconds : durationSeconds}`}

galleryVideo.addEventListener('timeupdate', currentTime)
*/