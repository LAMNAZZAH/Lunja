const express = require('express');

const interestCotrollers = require('../controllers/interest.controllers');


const router = express.Router(); 
const { selectInterestByUserId, deleteUserInterest } = interestCotrollers;

router.get('/', selectInterestByUserId);
router.delete('/', deleteUserInterest);

module.exports = router;