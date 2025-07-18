// Parallax
let projectBackground = document.getElementById('project-background')
let mobileProjectBackground = document.getElementById('mobile-project-background')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    projectBackground.style.top = value * 0.4 + 'px';
    mobileProjectBackground.style.top = value * 0.4 + 'px';
})



// Open images in fullscreen
document.onclick = (event) => {
    if (document.fullscreenElement) {
      document
        .exitFullscreen()
}}



// Year changer
document.getElementById("currentYear").textContent = new Date().getFullYear();



// Header hide
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;}
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);}
    else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);}
  lastScroll = currentScroll;
});



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