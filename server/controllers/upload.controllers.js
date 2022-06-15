
const accountModels = require('../models/account');
const postModels = require('../models/post');

const uploadProfile = async (req, res) => {
    const { updateProfile } = accountModels;
    const username = req.user.username; 
    const filename = req.file?.filename;

    if (!req.file) return res.status(500).json({errors: ['no file found to update the profile']});
    
    await updateProfile(username, filename).then(data => {
        if (!data.ok) return res.status(500).json(data)
        return res.json({});
    });
}

const uploadBackground = async (req, res) => {
    const { updateBackground } = accountModels;
    const username = req.user.username; 
    const filename = req.file?.filename;

    if (!req.file) return res.status(500).json({errors: ['no file found to update the background']});
    
    await updateBackground(username, filename).then(data => {
        if (!data.ok) return res.status(500).json(data); 
        return res.json({});
    });
}

const uploadPostImage = async (req, res) => {
    const { createPost } = postModels;
    const { userId, classId, byTeacher, content } = req.query;
    const imageName = req.file?.filename;
    

    await createPost(userId, classId, imageName, byTeacher,  content).then(data => {
        if (!data?.ok) return res.status(500).json(data)

        return res.status(200).json(data);
    })
}


module.exports = {
    uploadProfile,
    uploadBackground,
    uploadPostImage
}