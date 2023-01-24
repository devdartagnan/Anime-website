import data from "./api";

// const animeSection = document.querySelector('#animesSection') as HTMLElement
const lancamentosSection = document.querySelector('#lancamentosSection') as HTMLElement
function addingCards() {

    data?.forEach((el) => {
        const figure = document.createElement('figure') as HTMLElement
        const thumb = document.createElement('img') as HTMLImageElement
        const h3 = document.createElement('h3') as HTMLElement
        const paragraph = document.createElement('p') as HTMLElement
        const aLink = document.createElement('a') as HTMLElement
        
        aLink.addEventListener('click', () => setStorage(el))
        paragraph.textContent = el.title
        h3.textContent = el.title
        thumb.src = el.thumb
        aLink.setAttribute('href', 'player.html')
        aLink.appendChild(thumb)
        figure.appendChild(aLink)
        figure.appendChild(h3)
        figure.appendChild(paragraph)
        figure.setAttribute("onclick", `setStorage(el)`);
        lancamentosSection.appendChild(figure)
    })
}
addingCards()

function setStorage(el: object) {
    const apiAdd = {
        "id": el?.ids,
        "url": el?.url,
        "title": el?.title,
        "description": el?.description,
        "thumb": el?.thumb
    }
    localStorage.setItem('videoPlayer', JSON.stringify(apiAdd))
}
