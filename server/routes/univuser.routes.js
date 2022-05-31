const express = require('express'); 

const univUserControllers = require('../controllers/univuser.controllers');
const { authenticatedOnly } = require('../middlewares/Authentication');


const router = express.Router();
const { selectUniversityByUserId, selectUsersByUniversityId } = univUserControllers;

router.get('/', selectUniversityByUserId);
router.get('/university', selectUsersByUniversityId);




module.exports = router;