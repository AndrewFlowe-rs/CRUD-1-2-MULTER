// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {} = require("../controllers/others");
const homeController = require('../controllers/others');
// Desde la app.js viene (/)--> raiz
router.get('/', home); 
router.get('/search', search); 

module.exports = router;
