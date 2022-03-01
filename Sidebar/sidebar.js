
const buttonOpenMenu = document.getElementById('menuBox')
const buttonCloseMenu = document.getElementById('menuBoxFull')

const menuClass = document.querySelector('.menu')
const fullMenu = document.querySelector('.fullMenu')

buttonOpenMenu.onclick = function() {
    if(menuClass.style.display === 'flex') {
        menuClass.style.display = 'none'
        fullMenu.style.display = 'flex'
    } else {
        menuClass.style.display = 'flex'
        fullMenu.style.display = 'none'
    }
}

buttonCloseMenu.onclick = function() {
    if(fullMenu.style.display === 'flex') {
        menuClass.style.display = 'flex'
        fullMenu.style.display = 'none'
    } else {
        menuClass.style.display = 'none'
        fullMenu.style.display = 'flex'
    }
}