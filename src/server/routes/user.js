const express = require('express');
const userControllers = require('../controllers/userControllers')
const router = express.Router();

/* -------------------------- TEST -------------------------- */

// GET /test ---------------------------------------------------
// Get all user data
router.get('/test',
  //middeware
  userControllers.getAll,
  (req, res) => res.status(200).json(res.locals.users)
);


/* ---------------------- SIGNUP/LOGIN ---------------------- */

// GET /login ------------------------------------------------
// Check user info against databse
router.get('/login',
  //middeware
  userControllers.verify,
  (req, res) => res.status(200).json(/* res.locals. */)
);


// POST /login -----------------------------------------------
// Create new user data
router.post('/login',
  //middeware
  userControllers.signUp,
  (req, res) => res.status(200).json(/* res.locals. */)
);

/* ------------------- USER/SELLER INFO ------------------- */

// PUT /user
// Register user as seller
router.put('/user',
  //middeware
  userControllers.registerSeller,
  (req, res) => res.status(200).json(/* res.locals. */)
);

// GET /user
// Get seller_id from user data and attach to new product
router.get('/user',
  //middeware
  userControllers.sellerID,
  (req, res) => res.status(200).json(/* res.locals. */)
);


/* ----------------------- STRETCH ----------------------- */
// PUT /login ------------------------------------------------
// Change password
// router.put('/login',
//   //middeware
//   (req, res) => res.status(200).json(/* res.locals. */)
// );


module.exports = router;
