// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.???('/', productsController.index); 

/*** GET ONE PRODUCT ***/ 
router.???('/:id/', productsController.detail); 



module.exports = router;
