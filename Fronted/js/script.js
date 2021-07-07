const imagesList = document.querySelector('.images-list')
const categoriesSelect = document.querySelector('#categoriesSelect')
const searchInput = document.querySelector('#searchInput')
const form = document.querySelector('#form')

async function imagesRenderer() {
    let response = await request('http://localhost:7000/images')
    renderer1(response)
}

async function categoriesRender () {
    let response = await request('http://localhost:7000/categories')
    let string = `<option value="all">All</option>`
    response.forEach(category => {
        string += `
            <option value=${category.category_name}>${category.category_name}</option>
        `
    });
    categoriesSelect.innerHTML = string

    categoriesSelect.addEventListener('change', async () => {
        let images = await request('http://localhost:7000/images')
        let filtered = images.filter(image => image.category_name == categoriesSelect.value)
        if (categoriesSelect.value == 'all') {
            renderer1(images)
        } else {
            renderer1(filtered)
        }
        imagesList.classList.remove('view')
    })
}

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let images = await request('http://localhost:7000/images')
    let searchedWord = searchInput.value.toLowerCase()
    let filtered = images.filter(image => image.picture_title.toLowerCase().split(" ").includes(searchedWord))
    renderer1(filtered)
    searchInput.value = null
})

function renderer1 (array) {
    let string = ""
    array.forEach(image => {
        string +=   `
        <li class="image-item">
                <img src=${image.picture_url} alt="picture">
                <div class="title-wrapper">
                <h2>Pic Name: </h2>
                <h2>${image.picture_title}</h2>
                </div>
                <div class="category-wrapper">
                    <h3>Category: </h3>
                    <h3>${image.category_name}</h3>
                </div>
            <button class="view-btn">View</button>
        </li>
                
        `
    });
    imagesList.innerHTML = string
    viewBtns = document.querySelectorAll('.view-btn')
    viewBtns.forEach((button, index) => {
        button.addEventListener('click', async () => {
            let image = await request(`http://localhost:7000/images/${index + 1}`)
            imagesList.innerHTML = `
                <img src=${image.picture_url} alt="picture" width="50%">
                <div class="title-wrapper">
                    <h2>Pic Name: </h2>
                    <h2>${image.picture_title}</h2>
                </div>
                <div class="category-wrapper">
                    <h3>Category: </h3>
                    <h3>${image.category_name}</h3>
                </div>
                <p class="desc">${image.picture_desc}</p>
            `
            imagesList.classList.add('view')
        })
    })
}

imagesRenderer()
categoriesRender()