const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const TagData = await Tag.findAll({
      attributes: ["id", "tag_name"],
      include: [
        { 
            model: Product,
            attribute: ['id', 'product_name', 'price','stock','category_id']
          }
        ]
    });
    res.status(200).json(TagData); 
    } catch (err) {
    res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
  try {
    const TagData = await Tag.findOne(
      {
        where: {
          id: req.params.id
        },
      attributes: ["id", "tag_name"],
      include: [
        { 
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"]
        }
      ], 
    });
    if (!TagData) {
      res.status(404).json({message: "Invalid Tag ID"});
      return;
    }
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name}
      );
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const newTag = await Tag.update( req.body, {
      where: {
        id:req.params.id,
      }
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const TagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!TagData) {
      res.status(404).json({ message: 'No tag found with that id'});
      return;
    }

    res.status(200).json(TagData);
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
