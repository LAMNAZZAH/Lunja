const accountModel = require('../models/account');
const path = require('path');
const fs = require('fs');

const selectUserByUsername = async (req, res) => {
    const { selectByUsername } = accountModel;
    const username = req.params['username']

    await selectByUsername(username).then( data => {
        if (!data.ok)  return res.status(400).json(data);
        return res.status(200).json(data);
    })
}

const editAbout = async (req, res) => {
    const { updateAbout } = accountModel;
    const { userId, about } = req.body

    await updateAbout(userId, about).then(data => {
        if (!data.ok) return res.status(400).json(data)
        return res.status(200).json(data);
    });
}

const selectProfilePicture = (req, res) => {
    const profile = req.params.profile; 
    console.log(`${__dirname}/images/${profile}`);
    const Path = path.join(__dirname, '../', 'images', 'profiles', profile);
    try {
        if(fs.existsSync(Path)) return res.sendFile(Path);
    } catch (error) {
        res.status(500).json(error);
    }
    
}


module.exports = {
    selectUserByUsername,
    editAbout,
    selectProfilePicture
}