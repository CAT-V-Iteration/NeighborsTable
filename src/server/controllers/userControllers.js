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
    .catch(err => {
      next({
        log: 'Error located in userControllers.getAll',
        err,
      })
    });
};


/* ---------------------- SIGNUP/LOGIN ---------------------- */

// GET /login ------------------------------------------------
// Check user info against databse
userControllers.verify = (req, res, next) => {
  
};


// POST /login -----------------------------------------------
// Check if username is uique
userControllers.checkUsername = (req, res, next) => {
  const checkUsernameQuery = `
    SELECT username FROM users
    WHERE username = $1
  `;
  const { username } = req.body;

  db.query(checkUsernameQuery, [username])
    .then(usernames => {
      if (usernames.rows.length) {
        res.status(200).json({err: 'Username is already taken.'})
      }
      else return next();
    })
    .catch(err => {
      next({
        log: 'Error located in userControllers.checkUsername',
        err,
      })
    })
}


// POST /login -----------------------------------------------
// Create new user data
userControllers.signUp = (req, res, next) => {
  const signUpQuery = `
    INSERT INTO users (username, password)
    VALUES ($1, $2);
  `;
  const { username, password } = req.body;
  const values = [ username, password ];
  if (!username || !password) return next("Username and/ or Password are null")
  
  db.query(signUpQuery, values)
    .then(signUp => {
      res.locals.username = username;
      return next();
    })
    .catch(err => {
      next({
        log: 'Error located in userControllers.signUp',
        err,
      })
    })
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