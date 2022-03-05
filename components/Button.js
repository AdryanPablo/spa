import Anchor from './Anchor.js'

export default function Button(name) {
    const Button = document.createElement('li')
    Button.classList.add('Button')
    Button.setAttribute('id', `Button${name}`)
    
    Button.appendChild(Anchor(name))

    return Button
}