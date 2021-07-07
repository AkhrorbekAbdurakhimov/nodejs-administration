const photosList = document.querySelector('.photos-list')

async function renderPhotos () {
    let response = await request('/images')
    let string = ""
    response.forEach(photo => {
        string += `
            <li class="photos-item">
                <input type="checkbox">
                <span>${photo.picture_title[0].toUpperCase() + photo.picture_title.slice(1, photo.picture_title.length)}</span>
            </li>
        `
    })
    photosList.innerHTML = string
    const categoriesNumber = document.querySelectorAll('.number')
    categoriesNumber.forEach(category => {
        category.textContent = response.length
    })
}

renderPhotos()