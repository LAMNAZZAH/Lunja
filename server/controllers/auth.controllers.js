const accountModel = require("../models/account");
const jwt = require("jsonwebtoken");

const {
  checkAllowedFields,
  checkRequiredFields,
} = require("../utils/validators");
const { checkHash } = require("../utils/crypt");
const { isNull } = require("../utils/generic");

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

    } else if (
      !isNull(data.user) &&
      !checkHash(body.password, data.user.password)
    ) {

      res
        .status(400)
        .json({ ok: false, errors: ["Incorrect username/email or password"] });

    } else {

      try {

        jwt.sign(
          {
            userId: data.user.user_id, 
            username: data.user.username,
            account_type: data.user.account_type,
            status: data.user.status,
            profile: data.user.profile_url
          },
          process.env.JWT_SECRET,
          { expiresIn: "600s" || process.env.ACCESS_TOKEN_LIFETIME },
          (err, token) => {
            res.status(200).json({ ok: true, token });
          }
        );

      } catch (error) {

        res
          .status(400)
          .json({ ok: false, errors: ["there is an error loggin in!"] });

      }

    }
  });
};

const createIsLoggedInController = (req, res, next) => {

  const userData = {...req.user}

  delete userData.password
  
  if (req.user) return res.json({isLoggedIn: true, data: userData })
  return res.status(200).json({ isLoggedIn: false })

}


module.exports = {
  LoginController: createLoginController,
  isLoggedInController: createIsLoggedInController,
};
