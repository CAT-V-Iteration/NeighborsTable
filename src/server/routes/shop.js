const express = require('express');
const shopControllers = require('../controllers/shopControllers')
const router = express.Router();

// route to grab user's shopping list from database
router.get('/', 
shopControllers.getShoppingList, 
(req, res)=>{
  res.status(200).json(res.locals.list);
});

// route to add items to shopping cart
router.post('/additem', 
shopControllers.addItem, 
shopControllers.getShoppingList, 
(req, res) => {
    res.status(200).json(res.locals.list);
});

// (stretch) route to delete items from shopping cart 
router.delete('/deleteitem', 
shopControllers.deleteItem, 
shopControllers.getShoppingList, 
(req, res) => {
    res.status(200).json(res.locals.list)
});


module.exports = router;
