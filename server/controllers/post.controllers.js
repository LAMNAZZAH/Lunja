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

const selectPostImage  = async (req, res) => {
    const image = req.params.image; 
    const Path = path.join(__dirname, '../', 'images', 'profiles', image);
    try {
        if(fs.existsSync(Path)) return res.sendFile(Path);
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    selectPosts,
    selectPostImage
}