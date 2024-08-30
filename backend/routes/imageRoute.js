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

    // const patientName = req.body.patientName;
    // const imageName = req.file.filename;
    // const imageNamehighlight = "none";

    // const newimage = {
    //   patientName,
    //   imageName,
    //   imageNamehighlight,
    // };
    // try {
    //     await imageModel.create(newimage);
    //     console.log("Data sent to database");
    //     // return res.status(201).send(imagereport);
    //   } catch (error) {
    //     // Check if the error is due to duplicate key
    //     if (error.code === 11000 && error.keyValue && error.keyValue.patientName === patientName) {
    //       console.log("Duplicate key error: Patient name already exists");
    //       return res.status(400).json({ error: "Patient name already exists" });
    //     } else {
    //       console.error("Error processing image:", error);
    //       res.status(500).json({ error: "Error processing image" });
    //     }
    //   }


    // const imageFile = fs.createReadStream(imagePath);

    // // Create form data to send to Flask API
    // const formData = new FormData();
    // formData.append("image", imageFile);
    // formData.append("patientName", patientName);
    // formData.append("imageName", imageName);

    // // Send image data to Flask API
    // const flaskResponse = await axios.post("http://127.0.0.1:5000/predictmri", formData, {
    //   headers: {
    //     ...formData.getHeaders(),
    //   },
    // });

    // console.log("Data sent to Flask API");
    
    // // Send Flask API response back to client
    // res.status(201).json({
    //   flaskResponse: flaskResponse.data,
    // });

    // console.log("data sent to database");
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Error processing image" });
  }
});

module.exports = router;

// const storage = multer.memoryStorage(); // Use memory storage for handling files
// const upload = multer({ storage: storage }); 
// router.post("/uploadimage", upload.single("image"),async (req,res)=>{
//     try {
//         const image  = req.file;
//         if (!image) {
//             return res.status(400).json({ error: 'No file uploaded' });
//         }
//         // Create form data to send to Flask API
//         const formData = new FormData();
//         formData.append("file", image.buffer, {
//             filename: image.originalname,
//             contentType: image.mimetype,});
        
//         // formData.append("patientName", patientName);
//         // formData.append("category", category);
    
//         // Send image data to Flask API
//         const flaskResponse = await axios.post("http://127.0.0.1:5000/predictmri", formData, {
//           headers: {
//             ...formData.getHeaders(),
//           },
//         });
    
//         // Send Flask API response back to React frontend
//         res.json(flaskResponse.data);
//       } catch (error) {
//         console.error("Error uploading image:", error);
//         res.status(500).json({ error: "Error uploading image" });
//       }
// } );
// // router.post("/getimage", Login);