const express = require('express'); 

const univUserControllers = require('../controllers/university.controllers');
const { authenticatedOnly } = require('../middlewares/Authentication');


const router = express.Router();
const {  } = univUserControllers;

router.post('/', authenticatedOnly, );




module.exports = router;