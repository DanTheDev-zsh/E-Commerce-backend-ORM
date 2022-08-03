const Category = require('../models/Category');

const categoryData = [
    {
        category_name: 'Shirts',
    },
    {
        category_name: 'Shorts',
    },
    {
        category_name: 'Music',
    },
    {
        category_name: 'Hats',
    },
    {
        category_name: 'Shoes',
    },
];


// const seedCategories = async () => {
//     for (const { category_name } of categoryData) {
//         console.log("seeding one new category");
//         const newCategory = await Category.create({
//             category_name: category_name,
//         });
//     }
// }

const seedCategories = async () => await Category.bulkCreate(categoryData);

module.exports = seedCategories;
