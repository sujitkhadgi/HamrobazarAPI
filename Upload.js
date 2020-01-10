const express = require('express');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, callback) => {
        callback(null, `${file.fieldname}-${Date.now()}${ext}`);
    }
});

const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error("You can upload only image files!"), false);
    }
    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: imageFileFilter
});



module.exports = upload;