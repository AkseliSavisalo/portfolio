// Parallax
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