// import models

const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
    foriegnKey: 'category_id'
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, 
  { through: ProductTag,
    foriegnKey:'product_id' 
  }
  );

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, 
  {through: ProductTag,
  foriegnKey:'tag_id'
  }  
  );
  //{
  //foreignKey: 'tag_id',
  //onDelete: 'CASCADE'
//})



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
