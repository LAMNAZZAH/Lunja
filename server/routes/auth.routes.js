const express = require("express");

const registerControllers = require("../controllers/register.controller");

const router = express.Router();
const { registerController } = registerControllers;

router.post("/register", registerController);



module.exports = router;
