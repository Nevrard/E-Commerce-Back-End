// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo CategoryReader.hasMany(Book, {
 
  
  Product.belongsTo(Category, {
    foreignKey: 'product_id',
  });
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  //as: 'planned_trips'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  //as: 'planned_trips'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
