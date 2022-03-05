export default function Footer() {
    const Footer = document.createElement('footer')
    Footer.classList.add('Footer')
    
    const Paragraph = document.createElement('p')
    Paragraph.textContent = 'Footer'

    Footer.append(Paragraph)

    return Footer
}