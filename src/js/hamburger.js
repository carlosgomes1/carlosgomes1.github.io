var menu = document.querySelector('.menu');
var bar1 = document.querySelector('.barra-1');
var bar2 = document.querySelector('.barra-2');
var bar3 = document.querySelector('.barra-3');

var active = false;

document.querySelector('#hamburger').addEventListener('click', () => {
    if (active) {
        menu.style.display = 'none';
        bar2.style.display = 'initial';
        bar1.classList.remove('rotate1');
        bar3.classList.remove('rotate2');
    } else {
        menu.style.display = 'flex';
        bar2.style.display = 'none';
        bar1.classList.add('rotate1');
        bar3.classList.add('rotate2');
    }

    active = !active;
})