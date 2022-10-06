//imports
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//Get route
router.get('/', async (req, res) => {
  // find all categories
  // includes all its associated Products
  try{
    const categoryData = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get route
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // includes all its associated Products
  try{
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if(!categoryData){
      res.status(400).json({message: "No category found with this id!"});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create route
router.post('/',  (req, res) => {
  // create a new category
  /*
  req.body includes:
  {
    "category_name": "Sports"
  }
  */
  Category.create(req.body)
  .then((product) => {
    res.status(200).json(product);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
});

//Update Route
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  /*
  req.body includes:
  {
    "category_name": "Games"
  }
  */
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((product) => {
    res.status(200).json(product);
  })
  .catch((err) => res.status(400).json(err));

});

//Delete Route
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err))
});

module.exports = router;
