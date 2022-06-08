const express = require("express");



const registerControllers = require("../controllers/register.controllers");
const authControllers = require("../controllers/auth.controllers");
const accountControllers = require("../controllers/account.controllers");

const { verifyToken } = require("../middlewares/Authentication");

const router = express.Router();
const { registerController } = registerControllers;
const { LoginController, isLoggedInController } = authControllers;
const { selectUserByUsername, editAbout, selectProfilePicture } = accountControllers;

//?login/register
router.post("/auth/register", registerController);
router.post("/auth/login", LoginController);
router.get("/auth/", verifyToken,  isLoggedInController);


//?user
router.get('/user/:username', selectUserByUsername);
router.get('/user/profile/:profile', selectProfilePicture);

//?Edit
router.post('/user/about', editAbout); 


module.exports = router;
