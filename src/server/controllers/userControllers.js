const db = require('../models/models.js');

// userControllers and methods ------------------------
const userControllers = {};

/* -------------------------- TEST -------------------------- */

// GET /test ---------------------------------------------------
// Get all user data
userControllers.getAll = (req, res, next) => {
  const getAllQuery = `
    SELECT * FROM users;
  `;
  db.query(getAllQuery)
    .then(users => {
      res.locals.users = users.rows;
      return next();
    })
};


/* ---------------------- SIGNUP/LOGIN ---------------------- */

// GET /login ------------------------------------------------
// Check user info against databse
userControllers.verify = (req, res, next) => {
  
};


// POST /login -----------------------------------------------
// Create new user data
userControllers.signUp = (req, res, next) => {

};


/* ------------------- USER/SELLER INFO ------------------- */

// PUT /user
// Register user as seller
userControllers.registerSeller = (req, res, next) => {
  
};


// GET /user
// Get seller_id from user data and attach to new product
userControllers.sellerID = (req, res, next) => {
  
};


/* ----------------------- STRETCH ----------------------- */
// PUT /login ------------------------------------------------
// Change password



// Exports --------------------------------------------
module.exports = userControllers;