const menu = document.querySelector('div.menu')
let isOpen = false

menu.addEventListener('click', () => {
    if (!isOpen) {
        menu.classList.add('open')
        isOpen = true
    } else {
        menu.classList.remove('open')
        isOpen = false
    }
})
