import List from './List.js'

export default function Menu() {
    const Menu = document.createElement('nav')
    Menu.classList.add('Menu')

    Menu.appendChild(List())

    return Menu
}