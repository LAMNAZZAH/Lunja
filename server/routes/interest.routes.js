const express = require('express');

const interestCotrollers = require('../controllers/interest.controllers');


const router = express.Router(); 
const { selectInterestByUserId } = interestCotrollers;

router.get('/', selectInterestByUserId);

module.exports = router;