const express = require("express");

const registerControllers = require("../controllers/register.controllers");
const authControllers = require("../controllers/auth.controllers");
const { verifyToken } = require("../middlewares/Authentication");

const router = express.Router();
const { registerController } = registerControllers;
const { LoginController, isLoggedInController } = authControllers;

router.post("/register", registerController);
router.post("/login", LoginController);
router.get("/", verifyToken,  isLoggedInController);



module.exports = router;
