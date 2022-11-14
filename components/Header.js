import Logo from './Logo.js'
import Menu from './Menu.js'

export default function Header() {
    const Header = document.createElement('header')
    Header.classList.add('Header')

    Header.appendChild(Logo())
    Header.appendChild(Menu())

    return Header
}