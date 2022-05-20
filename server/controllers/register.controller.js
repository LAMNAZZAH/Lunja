const accountModel = require("../models/account");
const stringify = require("json-stringify-safe");


async function createRegisterController(req, res) {
  const { createAccount } = accountModel;
  const { body } = req;
  const errors = [];


  try {
    const user = await createAccount(
      body.first_name,
      body.last_name,
      body.username,
      body.birth_date,
      body.level,
      body.about,
      body.password,
      body.account_type,
      body.gender,
      body.email,
      body.phone,
      body.status,
      body.profile_url,
      body.background_url,
      body.left_at
    );
    console.log(user);
    res.json({ data: user });
  } catch (err) {
    res.status(500).json({ ok: false, err });
  }
}
module.exports = {
  registerController: createRegisterController,
};

/*
 body.first_name,
        body.last_name,
        body.username, 
        birthday,
        body.level,
        body.about,
        body.password,
        body.account_type,
        body.gender,
        body.email,
        body.phone,
        body.status,
        body.profile_url,
        body.background_url,
        body.left_at*/
