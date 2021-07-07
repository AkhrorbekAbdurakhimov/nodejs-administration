const categoriesList = document.querySelector('.categories-list')

async function renderCategories () {
    let response = await request('/categories')
    let string = ""
    response.forEach(category => {
        string += `
            <li class="category-item">
                <input type="checkbox" id="checkbox">
                <span>${category.category_name[0].toUpperCase() + category.category_name.slice(1, category.category_name.length)}</span>
            </li>
        `
    })
    categoriesList.innerHTML = string
    const categoriesNumber = document.querySelectorAll('.number')
    categoriesNumber.forEach(category => {
        category.textContent = response.length
    })
}

renderCategories()