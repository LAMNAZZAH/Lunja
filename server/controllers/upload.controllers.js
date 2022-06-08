
const accountModels = require('../models/account');

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
    })
}


module.exports = {
    uploadProfile,
    uploadBackground
}