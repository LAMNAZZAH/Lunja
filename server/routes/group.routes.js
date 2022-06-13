const express = require('express');

const groupControllers = require('../controllers/group.controllers'); 


const router = express.Router();
const { selectGroupsByAdminId, addGroup } = groupControllers;

router.get('/', selectGroupsByAdminId);
router.post('/', addGroup);


module.exports = router;