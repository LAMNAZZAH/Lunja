const express = require("express");

const registerControllers = require("../controllers/register.controller");

const router = express.Router();
const { registerController } = registerControllers;

router.get("/register", registerController);



module.exports = router;
