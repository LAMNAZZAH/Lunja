const path = require('path');
const fs = require('fs');

const postModels = require('../models/post');


const selectPosts = async (req, res) => {
    const {  findManyPosts } = postModels;

    await findManyPosts().then(data => {
        if (!data.ok) return res.status(400).json(data);
        data.Posts.forEach(post => {
            delete post['created_at']; 
        });
        res.status(200).json(data);
    })
}

const selectPostsByGroupId = async (req, res) => {
    const { findManyPostsByGroupId } = postModels;
    const groupId = req.params.groupId; 

    await findManyPostsByGroupId(groupId).then(data => {
        if (!data.ok) return res.status(400).json(data); 
        return res.status(200).json(data);
    })
}

const selectGroupsPosts = async (req, res) => {
    const { findManyPostsByGroupsIds } = postModels; 
    const groups = req.body.groups; 

    await findManyPostsByGroupsIds(groups).then(data => {
        if (!data.ok) return res.status(200).json(data);
        return res.status(200).json(data)
    })
}

const selectPostImage  = async (req, res) => {
    const image = req.params.image; 
    const Path = path.join(__dirname, '../', 'images', 'profiles', image);
    try {
        if(fs.existsSync(Path)) return res.sendFile(Path);
    } catch (error) {
        res.status(500).json(error);
    }
}

const selectPostTags = async (req, res) => {
    const postId = req.params.postId; 
    const { findTagsByPostId } = postModels;

    await findTagsByPostId(postId).then(data => {
        const array = [];
        if (!data.ok) return res.status(400).json(data);
        data.tags.forEach(tag => {
            array.push(tag.tag['name']);
        }) 
        return res.status(200).json({ ok: true, tags: array });
    })
}

const selectLatestPostByUserId = async (req, res) => {
    const userId = req.params.userId; 
    const { FindFirstPostByUserId } = postModels;

    await FindFirstPostByUserId(userId).then(data => {
        if (!data.ok) return res.status(400).json(data); 
        return res.status(200).json(data);
    })
}


module.exports = {
    selectPosts,
    selectPostImage,
    selectPostTags, 
    selectLatestPostByUserId,
    selectPostsByGroupId,
    selectGroupsPosts
}