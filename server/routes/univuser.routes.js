const express = require('express'); 

const univUserControllers = require('../controllers/univuser.controllers');
const { authenticatedOnly } = require('../middlewares/Authentication');


const router = express.Router();
const { selectUniversityByUserId, selectUsersByUniversityId, addUnivuser, removeUnivuser } = univUserControllers;

router.get('/', selectUniversityByUserId);
router.get('/university', selectUsersByUniversityId);
router.post('/', addUnivuser);
router.delete('/', removeUnivuser);



module.exports = router;