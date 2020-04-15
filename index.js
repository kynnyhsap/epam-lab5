function scrollReachedBottom(el) {
    return el.scrollTop + el.clientHeight >= el.scrollHeight
}


const loadingOverlayElement = document.querySelector('.loading-overlay')
loadingOverlayElement.classList.add('is-loading')

fetchRandomUsers().then(users => {
    appendImages(users.map(u => u.picture.large))
    loadingOverlayElement.classList.remove('is-loading')
})



const htmlElement = document.querySelector('html')
let currentPage = 1
window.addEventListener('scroll', (e) => {
    if (scrollReachedBottom(htmlElement)) {
        loadingOverlayElement.classList.add('is-loading')
        currentPage++


        fetchRandomUsers(25, currentPage).then(users => {
            appendImages(users.map(u => u.picture.large))
            loadingOverlayElement.classList.remove('is-loading')
        }).catch(err => {
            console.error(err)
            loadingOverlayElement.classList.remove('is-loading')
        })
    }
})