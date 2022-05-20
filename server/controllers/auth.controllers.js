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
    console.log("typeof data.user: " +  data.ok)
    if (data.user == null) {
      res
        .status(400)
        .json({ ok: false, errors: ["Invalid username/email or password"] });
    } else if (data.user !== null) {
        if (!checkHash(body.password, data.user[0].password)) {
            res
              .status(400)
              .json({ ok: false, errors: ["Incorrect username/email or password"] });
        }
    } else {

      try {
        jwt.sign(
          {
            username: data.user[0].username,
            account_type: data.user[0].account_type,
            status: data.user[0].status,
          },
          process.env.JWT_SECRET,
          { expiresIn: "180s" },
          (err, token) => {
            res.status(200).json({ ok: true, token });
          }
        );
      } catch (error) {
        res.status(400).json({ ok: false, errors: ['there is an error loggin in!'] });
      }
    }
  });

};

module.exports = {
  LoginController: createLoginController,
};