const express = require('express'); 

const postControllers = require('../controllers/post.controllers'); 


const router = express.Router(); 

const { selectPosts, selectPostImage } = postControllers;

router.get('/', selectPosts);
router.get('/postImage/:image', selectPostImage);


module.exports = router;