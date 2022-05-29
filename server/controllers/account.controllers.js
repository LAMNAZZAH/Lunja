const accountModel = require('../models/account');

const selectUserByUsername = async (req, res) => {
    const { selectByUsername } = accountModel;
    const username = req.params['username']

    await selectByUsername(username).then( data => {
        if (data.ok) res.status(200).json(data);

        else res.status(400).json(data);
    })
}

module.exports = {
    selectUserByUsername,
}