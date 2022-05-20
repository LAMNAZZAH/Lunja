const { isNull } = require("../utils/generic");

const verifyTokenExist = (req, res, next) => {
    const bearerHeader = req.header("Authorization"); 

    if(!isNull(bearerHeader)) {
        const authHeader = bearerHeader.split(" "); 

        const token = authHeader[1]; 

        req.token = token; 
        next()
    } else {
        res.status(403).json({ok: false, errors: ['access token is missing']})
    }
}

module.exports = {
    verifyTokenExist,
}