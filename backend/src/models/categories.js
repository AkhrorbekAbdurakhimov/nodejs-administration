const fs = require('fs')
const path = require('path')

const getCategories = () => require('./../database/categories.json')

const addCategory = (category) => {
    const categories = require('./../database/categories.json')
    const categoryId = categories.length ? categories[categories.length - 1].category_id + 1 : 1
    categories.push({
        category_id: categoryId,
        ... category
    })
    fs.writeFileSync(path.join(__dirname, '..', 'database', 'categories.json'), JSON.stringify(categories, null, 4))
} 

module.exports = {addCategory, getCategories}