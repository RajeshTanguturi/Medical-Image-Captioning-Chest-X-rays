const FormData = require("form-data");
const axios = require("axios");
const fs = require("fs");
const router = require("express").Router();
const multer = require("multer");
const imageModel = require("../models/ImageModel");
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/uploads")); // Specify the destination directory
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const filename = `${uniqueSuffix}${path.extname(file.originalname)}`;
      cb(null, filename);
    },
  });
  
const upload = multer({ storage: storage });
router.post("/uploadimage", upload.single("image"), async (req, res) => {
  try {
    console.log("1")
    console.log("post request recived");
    console.log(req.body);
    const imagePath = path.join("./public/uploads", req.file.filename);

     const imageFile = fs.createReadStream(imagePath);
     const formData = new FormData();
    formData.append("file", imageFile);

    // Send image data to Flask API
    const flaskResponse = await axios.post("http://127.0.0.1:5000/predictmri", formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });
      res.status(201).json({
      flaskResponse: flaskResponse.data,
    });
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Error processing image" });
  }
});

module.exports = router;
