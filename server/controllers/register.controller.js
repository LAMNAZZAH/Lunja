const accountModel = require('../models/account');

function createRegisterController(req, res, next) {
    console.log("authrouter here!!");
    res.json("its just fine!!");
}


module.exports = {
    registerController: createRegisterController, 
}