const accountModel = require("../models/account");
const jwt = require("jsonwebtoken");

const {
  checkAllowedFields,
  checkRequiredFields,
} = require("../utils/validators");
const { checkHash } = require("../utils/crypt");

const createLoginController = async (req, res, next) => {
  const { selectByUsernameOrEmail } = accountModel;
  const { body } = req;
  const errors = [];

  errors.push(...checkRequiredFields(body, ["usernameOrEmail", "password"]));
  errors.push(...checkAllowedFields(body, ["usernameOrEmail", "password"]));

  if (errors.length > 0) return res.status(400).json({ ok: false, errors });

  await selectByUsernameOrEmail(body.usernameOrEmail).then((data) => {

    if (data.user == null) {

      res
        .status(400)
        .json({ ok: false, errors: ["Invalid username/email or password"] });

    } else if (!checkHash(body.password, data.user[0].password)) {

      res
        .status(400)
        .json({ ok: false, errors: ["Incorrect username/email or password"] });

    } else {

      jwt.sign({
        username: data.user[0].username,
        account_type: data.user[0].account_type,
        status: data.user[0].status,
      }, process.env.JWT_SECRET, { expiresIn: "180s" })
      .then(token => {
          req.session.token = token;
          res.status(200).json({ok: true, token});
      })
      .catch(error => {
          console.log("error: " + error);
          res.status(403).json({ok: false, errors: ['login failed']})
      })

    }
  });

  /*
  try {
    jwt
      .sign(
        {
          username: user.username,
          account_type: user.account_type,
          status: user.status,
        },
        process.env.JWT_SECRET,
        { expiresIn: "180s" }
      )
      .then((token) => res.json({ ok: true, token }))
      .catch((error) => res.json({ ok: true, error }));
  } catch (error) {
    res.json({ ok: false, error });
  }*/
};

module.exports = {
  LoginController: createLoginController,
};
