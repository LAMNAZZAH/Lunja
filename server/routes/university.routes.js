const express = require('express'); 

const universityControllers = require('../controllers/university.controllers');
const { authenticatedOnly } = require('../middlewares/Authentication');


const router = express.Router();
const { createUniversityController, selectUniversitiesController, searchUniversity } = universityControllers

router.post('/', authenticatedOnly, createUniversityController);
router.get('/',selectUniversitiesController);
router.get('/search', searchUniversity)



module.exports = router;