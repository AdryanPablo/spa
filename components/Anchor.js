export default function Anchor(name) {
    const Anchor = document.createElement('a')
    Anchor.classList.add('Anchor')

    if (name == 'Home') {

        Anchor.setAttribute('href', '/#')

    } else {

        Anchor.setAttribute('href', `/#${name}`)

    }

    Anchor.textContent = `${name}`

    return Anchor
}