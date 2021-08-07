const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
  const CategoryData = await Category.findAll({
    include: [{ model: Product}],
  });
  res.status(404).json(CategoryData); } catch (err) {
  res.status(500).json(err);
  }
  

  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  try {
    const CategoryData = await Category.findByPk(req.params.id, {
      include: [{ moedl: Product}],
    });
    if (!CategoryData) {
      res.status(404).json({message: "Invalid Product ID"});
      return;
    }
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
