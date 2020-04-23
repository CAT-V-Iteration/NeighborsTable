const db = require('../models/models.js');

const productControllers = {};
// read portion of CRUD 
productControllers.getZip = (req,res,next) =>{

const zipGetReq = 
`SELECT p.title,p.price,p.description,s.name,s.about,s.phone,s.email
FROM product p
INNER JOIN seller s
ON p.seller_id = s._id
WHERE s.zip = $1`;

const zip = (req.params.zip || req.body.zip); 

db.query(zipGetReq, [ zip ])
  .then((products) => {
    res.locals.products = products.rows;
    next();
  })
  .catch(e => console.log(e));
}
// 
productControllers.productSave = (req, res, next) => {
  const { title, price, description, seller_id } = req.body.product;
  const sellerId = res.locals._id;
  const values = [ title, price, description, seller_id ];

  // create portion of CRUD 
  // on insert you need to pass in the res.locals id from sellSave
  const saveProduct = 
  `INSERT INTO product(title,price,description,seller_id)
  VALUES ($1,$2,$3,$4)`;


  db.query(saveProduct, values)
    .then(products => {
      res.locals.product = products.rows[0];
      next();
    })
    .catch(e => {
      next({
        e: 'error on controller product save',
        error: e 
        });
    })
    // probably want to place another db query
  }

productControllers.sellerSave = (req, res, next) => {

    const { name, zip, about, phone, email, users_id } = req.body.seller;
    const values = [ name, zip, about, phone, email, users_id ];
    const sellerSaveQuery = 
    `INSERT INTO seller(name, zip, about, phone, email, users_id)
    VALUES ($1, $2, $3, $4, $5, $6) 
    RETURNING *`;


  db.query(sellerSaveQuery, values)
    .then(sellers => {
      res.locals._id = sellers.rows[0]._id;
      res.locals.about = sellers.rows[0].about;
      res.locals.seller = sellers.rows[0];
      next();
    })
    .catch(e => {
      next({e: 'error on controller seller save'});
    })
  }

module.exports = productControllers;