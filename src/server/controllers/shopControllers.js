const db = require('../models/models.js');

const shopControllers = {};

shopControllers.getShoppingList = (req, res, next) => {
    const shoppingList =
    `SELECT quantity.*, quantity._id quantity_id, product.*
    FROM quantity
    LEFT JOIN product
    ON product._id = quantity.product_id
    WHERE user_id = $1`

    // need to find where id is living in the req
    // const userId = [ req.body.variable ]
  db.query(shoppingList, userId)
  .then((list)=>{
    //console.log('list data: ', list);
    res.locals.list = list;
    next();
  })
  .catch((err)=> console.log('error in getShoppingList: ', err));

}

shopControllers.addItem = (req, res, next) => {
    // get userID to establish which list to access
    // retreive list for that specific userID
    // add items to the list
    // send back the list to the user 
    const addItemToList =
    `INSERT INTO quantity(user_id, product_id, quantity)
    VALUES ($1, $2, 1)`

    const userId = [/* where id is for the req*/];

    db.query(addItemToList, userId)
    .then((list) => {
    next();
    })
    .catch((err) => console.log('Error, unable to access your list:', err))
}

// stretch for delete 
shopControllers.deleteItem = (req, res, next) => {
  const deleteItemFromList =
  `DELETE FROM quantity
   WHERE quantity_id = $1`

  // need quantity id from front end
  const quantityId = [/* where id is for the req*/];

  db.query(deleteItemFromList, quantityId)
  .then((list) => {
  next();
  })
  .catch((err) => console.log('Error, unable to access your list:', err))
}

module.exports = shopControllers;