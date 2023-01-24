let getObject = JSON.parse(localStorage.getItem("videoPlayer") || "")

function getELoadVideo() {
    const videoPlayer = document.querySelector('#videoPlayer') as HTMLImageElement
    const title = document.querySelector('#title') as HTMLElement
    const descriptionPlayer = document.querySelector('#descriptionPlayer') as HTMLElement
    
    videoPlayer.src = getObject.url
    title.textContent = getObject.title
    descriptionPlayer.innerHTML = getObject.description
}

// function appendEl(parent: HTMLElement, el: HTMLElement) {
//     parent.appendChild(el)
// }
window.onload = getELoadVideo
export { }
