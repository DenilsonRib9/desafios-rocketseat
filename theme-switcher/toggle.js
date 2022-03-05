let toggle = document.querySelector('.toggle');
let body = document.getElementsByTagName('body')[0];

function AnimatedToggle() {
    toggle.classList.toggle('active')
    body.classList.toggle('dark-theme')
}