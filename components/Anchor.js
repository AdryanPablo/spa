export default function Anchor(name) {
    const Anchor = document.createElement('a')
    Anchor.classList.add('Anchor')

    if (name == 'Home') {

        Anchor.setAttribute('href', '/spa/#')

    } else {

        Anchor.setAttribute('href', `/spa/#${name}`)

    }

    Anchor.textContent = `${name}`

    return Anchor
}