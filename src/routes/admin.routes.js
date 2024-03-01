// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { create, store, edit, update, destroy} = require ("../controllers/admin")

/*** CREATE ONE PRODUCT ***/ 
router.get('/???/', create);
router.post('/',store); 



/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/???',edit); 
router.put('/:id', update);


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id',destroy); 


module.exports = router;
