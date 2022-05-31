const express = require('express');

const interestCotrollers = require('../controllers/interest.controllers');


const router = express.Router(); 
const { selectInterestByUserId, deleteUserInterest, searchInterest, addUserInterest } = interestCotrollers;


router.post('/', addUserInterest);
router.get('/', selectInterestByUserId);
router.get('/search', searchInterest);
router.delete('/', deleteUserInterest);


module.exports = router;