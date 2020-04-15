function appendImages(imageSources) {
    const containerElement = document.querySelector('.container')

    for (let i = 0; i < imageSources.length; i += 5) {
        const row = imageSources.slice(i, i + 5)

        const rowElement = document.createElement('div')
        rowElement.classList.add('row')

        for (const imageSrc of row) {
            const imageElement = document.createElement('img')
            imageElement.src = imageSrc

            rowElement.appendChild(imageElement)
        }

        containerElement.appendChild(rowElement)
    }
}
