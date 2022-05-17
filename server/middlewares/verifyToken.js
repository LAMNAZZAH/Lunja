const verifyTokenExist = (req) => {
  return  (req, res, next) => {
    const bearerHeader = req.header("Authorization");
    if (typeof bearerHeader == "undifined") {
      return res
        .status(401)
        .json({ ok: false, errors: ["authentication_required"] });
    } else {

      const bearer = bearerHeader.split(" ");

      const bearerToken = bearer[1];

      req.token = bearerToken;

    }

    next()
    
  };
};
