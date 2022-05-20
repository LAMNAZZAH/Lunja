const express = require("express");

const registerControllers = require("../controllers/register.controllers");
const authControllers = require("../controllers/auth.controllers");

const router = express.Router();
const { registerController } = registerControllers;
const { LoginController } = authControllers;

router.post("/register", registerController);
router.post("/login", LoginController);



module.exports = router;
