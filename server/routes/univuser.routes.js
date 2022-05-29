const express = require('express'); 

const univUserControllers = require('../controllers/univuser.controllers');
const { authenticatedOnly } = require('../middlewares/Authentication');


const router = express.Router();
const { selectUniversityByUserId } = univUserControllers;

router.get('/', selectUniversityByUserId);




module.exports = router;