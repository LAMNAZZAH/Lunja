const express = require('express'); 

const postControllers = require('../controllers/post.controllers'); 


const router = express.Router(); 

const { selectPosts } = postControllers;

router.get('/', selectPosts);


module.exports = router;