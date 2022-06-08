const express = require("express");

const accountRouter = require("./account.routes");
const universityRouter = require('./university.routes'); 
const specialityRouter = require('./speciality.routes');
const univuserRouter = require('./univuser.routes');
const interestRouter = require('./interest.routes');
const fileuploadRouter = require('./fileupload.routes');

const router = express.Router();

router.use("/account", accountRouter);
router.use('/university', universityRouter);
router.use('/speciality', specialityRouter);
router.use('/univuser', univuserRouter);
router.use('/interest', interestRouter);
router.use('/upload', fileuploadRouter);

module.exports = router;
