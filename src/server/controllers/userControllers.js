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
  const verifyQuery = `
    SELECT _id 
    FROM users
    WHERE username = $1 AND password = $2
  `;
  const { username, password } = req.query;
  db.query(verifyQuery, [username, password])
    .then(loginData => {
      if (loginData.rows.length) {
        res.locals.user_id = loginData.rows[0]._id;
        return next();
      }
      else {
        res.status(200).json({err: 'Invalid username or password'});
      }
    })
    .catch(err => {
      next({
        log: 'Error located in userControllers.verify',
        err,
      })
    })
};

// GET || POST /login ------------------------------------------------
// Check if user is seller

userControllers.verifySeller = (req, res, next) => {
  const verifySellerQuery = `
    SELECT _id
    FROM seller
    WHERE users_id = $1
  `;
  db.query(verifySellerQuery, [res.locals.user_id])
    .then(sellerID => {
      res.locals.seller_id = sellerID.rows.length ? 
      sellerID.rows[0]._id : null;
      res.cookie('user_id', res.locals.user_id);
      res.cookie('seller_id', res.locals.seller_id);
      next();
    })
    .catch(err => {
      next({
        log: 'Error located in userControllers.verifySeller',
        err,
      })
    })
};


// GET || POST /login -----------------------------------------------
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
    VALUES ($1, $2)
    RETURNING _id;
  `;

  const { username, password } = req.body;
  const values = [ username, password ];
  if (!username || !password) return next("Username and/ or Password are null")
  
  db.query(signUpQuery, values)
    .then(signUp => {
      res.locals.username = username;
      res.locals.user_id = signUp.rows[0]._id;
      return next();
    })
    .catch(err => {
      next({
        log: 'Error located in userControllers.signUp',
        err,
      })
    })
};


/* ----------------------- STRETCH ----------------------- */
// PUT /login ------------------------------------------------
// Change password



// Exports --------------------------------------------
module.exports = userControllers;