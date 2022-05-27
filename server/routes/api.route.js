const express = require("express");

const authRouter = require("./auth.routes");
const universityRouter = require('./university.routes'); 

const router = express.Router();

router.use("/auth", authRouter);
router.use('/university', universityRouter);

module.exports = router;
