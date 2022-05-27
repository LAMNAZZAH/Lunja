const express = require('express'); 

const universityControllers = require('../controllers/university.controllers');
const { verifyToken, authenticatedOnly } = require('../middlewares/Authentication');


const router = express.Router();
const { createUniversityController, getUniversitiesController } = universityControllers

router.post('/',authenticatedOnly, createUniversityController);
router.get('/', getUniversitiesController);



module.exports = router;