// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {list ,detail }= require('../controllers/products');
// /productos desde app
/*** GET ALL PRODUCTS ***/ 
router.get('/list', list); 

/*** GET ONE PRODUCT ***/ 
router.get('/detalle/:id',detail); 



module.exports = router;
