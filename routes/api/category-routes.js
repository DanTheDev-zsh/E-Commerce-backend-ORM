const router = require('express').Router();
const { Category, Product } = require('../../models');
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    // const sql = `SELECT * FROM product JOIN category ON product.category_id = category.id`
    console.info(`${req.method} request received for category`);
    const productData = await Category.findAll({
        include: [{
            model: Product,
            required: true
        }]
    }).catch((err) => {
        res.json(err);
    });
    res.json(productData);
});

router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
        const singleCategoryData = await Category.findByPk(req.params.id, {
            include: [{ model: Product }],
        }).catch((err) => {
            res.json(err);
        });

        if (!singleCategoryData) {
            res.status(404).json({ message: 'No category found with that id!' });
            return;
        }

        res.status(200).json(singleCategoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    // console.log('requested body is: ', req);
    // create a new category
    try {
        const categoryNameData = await Category.create({
            category_name: req.body.category_name,
        });
        res.status(200).json(categoryNameData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // update a category by its `id` value
    try {
        const categoryNameData = await Category.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!categoryNameData[0]) {
            res.status(404).json({ message: 'No category with this id!' });
            return;
        }
        res.status(200).json(categoryNameData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
    try {
        const destructionData = await Category.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!destructionData) {
            res.status(404).json({ message: 'No category found with that id!' });
            return;
        }

        res.status(200).json(destructionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
