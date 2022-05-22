const accountModel = require("../models/account");
const { toLowerCase } = require('../helpers/case');
const jwt = require("jsonwebtoken");
const { hash } = require('../utils/crypt')
const {
  checkRequiredFields,
  checkAllowedFields,
} = require("../utils/validators");

async function createRegisterController(req, res) {
  const { createAccount } = accountModel;
  const { body } = req;
  const errors = [];

  errors.push(
    ...checkRequiredFields(body, [
      "first_name",
      "last_name",
      "password",
      "username",
      "account_type",
      "email",
    ])
  );

  errors.push(
    ...checkAllowedFields(body, [
      "first_name",
      "last_name",
      "username",
      "birth_date",
      "level",
      "about",
      "username",
      "password",
      "account_type",
      "gender",
      "email",
      "phone",
      "profile_url",
      "background_url",
    ])
  );

  if (errors.length > 0) return res.status(400).json({ ok: false, errors });

  const hashedPassword = await hash(body.password);

  const lowerCaseUsername = toLowerCase(body.username);

  await createAccount(
    body.first_name,
    body.last_name,
    lowerCaseUsername,
    body.birth_date,
    body.level,
    body.about,
    hashedPassword,
    body.account_type,
    body.gender,
    body.email,
    body.phone,
    body.profile_url,
    body.background_url,
  ).then((data) => {
    if (data.ok === true) {
      res.status(200).json(data);
    } else res.status(400).json(data);
  });
}

module.exports = {
  registerController: createRegisterController,
};

