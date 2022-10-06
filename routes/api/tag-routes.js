const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if (!tagData){
      res.status(404).json({message: "No tag found with this id!"});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  /*
  req.body will look like this...
  {
    "tag_name": "orange",
    "productIds": []
  }
  */


  // create a new tag
  Tag.create(req.body)
  .then((tag) => {
    if (req.body.productIds.length) {
      const productTagIdArr = req.body.productIds.map((product_id) => {
        return {
          product_id,
          tag_id: tag.id,
        };
      });

      return ProductTag.bulkCreate(productTagIdArr);

    }
    res.status(200).json(tag);
  })
  .then((productTagIds) => res.status(200).json(productTagIds))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  // Changes the specific id to the data from req.body
  // {
  //   "tag_name": "orange",
  //   "productIds": [4, 5, 6]
  // }
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
  .then((product) => {
    return ProductTag.findAll({where: {tag_id: req.params.id}});
  })
  .then((productTags) => {
    //TODO: Refer to line 90 in product-routes.js
    const productTagIds = productTags.map(({ product_id }) => product_id)
    const newProductTags = req.body.productIds
    .filter((product_id) => !productTagIds.includes(product_id))
    .map((product_id) => {
      return {
        product_id,
        tag_id: req.params.id
      };
    });
  const productTagsToRemove = productTags
  .filter(({ product_id }) => !req.body.productIds.includes(product_id))
  .map(({ id }) => id);

  return Promise.all([
    ProductTag.destroy({ where: { id: productTagsToRemove}}),
    ProductTag.bulkCreate(newProductTags),
  ]);
  })
  .then((updatedProductTags) => res.json(updatedProductTags))
  .catch((err) => {
    res.status(400).json(err);
  })

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then((deletedTag) => {
    res.json(deletedTag);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
