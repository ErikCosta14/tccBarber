const menu = document.querySelector('.cabecalho');

function activeScroll () {
    menu.classList.toggle('scroll', scrollY >= 680)
}

window.addEventListener('scroll', activeScroll);