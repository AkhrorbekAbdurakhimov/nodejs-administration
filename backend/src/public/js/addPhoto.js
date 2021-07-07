const select = document.querySelector('.category_select')

async function renderSelect () {
    let response = await request('/categories')
    let string = ""
    response.forEach(category => {
        string += `
           <option value="${category.category_name}">${category.category_name}</option>
        `
    })
    select.innerHTML = string
}

renderSelect()