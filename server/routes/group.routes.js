const express = require('express');

const groupControllers = require('../controllers/group.controllers'); 


const router = express.Router();
const { selectGroupsByAdminId } = groupControllers;

router.get('/', selectGroupsByAdminId);


module.exports = router;