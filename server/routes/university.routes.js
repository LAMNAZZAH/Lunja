const express = require('express'); 

const universityControllers = require('../controllers/university.controllers');
const { verifyToken, authenticatedOnly } = require('../middlewares/Authentication');


const router = express.Router();
const { createUniversityController, SelectUniversitiesController } = universityControllers

router.post('/',authenticatedOnly, createUniversityController);
router.get('/', SelectUniversitiesController);



module.exports = router;