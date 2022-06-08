const express = require("express");
const multer = require('multer');
const path = require('path');
const uuid = require('uuid');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/profiles/');
    },
    filename: (req, file, cb) => {
        cb(null, uuid.v4() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });




const uploadControllers = require('../controllers/upload.controllers');
const { authenticatedOnly } = require('../middlewares/Authentication');

const router = express.Router();
const { uploadProfile, uploadBackground } = uploadControllers;


router.post("/uploadProfile", authenticatedOnly, upload.single('file'), uploadProfile);
router.post("/uploadBackground", authenticatedOnly, upload.single('file'), uploadBackground)

module.exports = router;
