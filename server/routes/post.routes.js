const express = require('express'); 

const postControllers = require('../controllers/post.controllers'); 


const router = express.Router(); 

const { selectPosts, selectPostImage, selectPostTags, selectLatestPostByUserId, selectPostsByGroupId, selectGroupsPosts } = postControllers;

router.get('/', selectPosts);
router.post('/', selectGroupsPosts)
router.get('/:groupId', selectPostsByGroupId);
router.get('/postImage/:image', selectPostImage);

router.get('/tag/:postId', selectPostTags);
router.get('/latest/:userId', selectLatestPostByUserId );


module.exports = router;