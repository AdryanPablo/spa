import createTitle from './createTitle.js'

export default function createPage(name) {
    const Page = document.createElement('section')
    Page.setAttribute('id', `${name}`)

    const Title = createTitle(name)
    Page.append(Title)

    return Page
}