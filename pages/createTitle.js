export default function createTitle(name) {
    const Title = document.createElement('h1')
    Title.classList.add('Title')
    
    Title.textContent = `${name}`

    return Title
}