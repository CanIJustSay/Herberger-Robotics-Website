const nav = document.querySelector('.nav');
const about = document.querySelector('.about');
const services = document.getElementsByClassName('services');
const contact = document.getElementsByClassName('contact');
const home = document.getElementsByClassName('home');


window.addEventListener('scroll', fixNav);




function fixNav() {
    if(window.scrollY >  nav.offsetHeight + 150){ 
        nav.classList.add('active');
    } else{ 
        nav.classList.remove('active');
    }
}