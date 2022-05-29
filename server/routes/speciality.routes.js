const express = require('express'); 

const specialityConrollers = require('../controllers/speciality.controllers');



const router = express.Router();
const { selectSpecialitiesByUniversityId } = specialityConrollers

router.get('/', selectSpecialitiesByUniversityId);




module.exports = router;