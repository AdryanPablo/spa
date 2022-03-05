import Button from './Button.js'

export default function List() {
    const List = document.createElement('ul')
    List.classList.add('List')

    List.appendChild(Button('Home'))
    List.appendChild(Button('Login'))
    List.appendChild(Button('About'))

    return List
}