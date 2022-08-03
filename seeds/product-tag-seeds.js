const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1,
    tag_id: 6,
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 1,
    tag_id: 8,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
];

// const seedproducttag = async () => {
//     for (const { category_name } of categoryData) {
//         console.log("seeding one new category");
//         const newCategory = await Category.create({
//             category_name: category_name,
//         });
//     }
// }
console.log(productTagData);

const seedProductTags = async () => await ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
