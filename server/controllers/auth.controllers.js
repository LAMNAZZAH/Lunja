const accountModel = require('../models/account'); 


const createSignUpController = (pool) => {
    const { createAccount } = accountModel(pool)
}