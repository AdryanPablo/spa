import CurrentPage from './Pages.js'

export default function Main() {
    const Main = document.createElement('main')
    Main.classList.add('Main')

    Main.appendChild(CurrentPage('Home'))
    
    return Main
}