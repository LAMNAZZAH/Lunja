const bcrypt = require('bcrypt');

const hash =  (data) => {
    //const salt = await bcrypt.genSalt();
    return bcrypt.hash(data, 10)
}

const checkHash = (data, hash) => {
    return bcrypt.compareSync(data, hash)
}


module.exports = {
    hash,
    checkHash
}