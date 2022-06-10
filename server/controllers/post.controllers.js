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

module.exports = {
    selectPosts,
}