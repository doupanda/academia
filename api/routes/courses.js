const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { checkAuth } = require("../middlewares/authentication.js");

//models import
import Course from "../models/course.js";

//OBTIENE todos los cursos POR URL
router.get("/courses", async (req, res) => {
    try {
        
        const courses = await Course.find();
  
      return res.json(courses);
      
  
    } catch (error) {
      console.log(error);
    }
  });

//OBTIENE UN CURSO POR URL
router.get("/course", async (req, res) => {
    try {
        
        const course = await Course.findOne({ url: req.query.url });
  
        return res.json(course);
  
    } catch (error) {
      console.log(error);
    }
});
  
router.post("/course-insert", async (req, res) => {
  try {
 
    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const shortDescription = req.body.shortDescription;
    const description = req.body.description;
    const image = req.body.image;
    const url = req.body.url;
    const price = req.body.price;
    const idTrailer = req.body.idTrailer;

    const newCourse = {
     
    title: title,
    subtitle: subtitle,
    shortDescription:shortDescription ,
    description: description ,
    image: image ,
    url: url,
    price: price,
    idTrailer: idTrailer
  
    };

    const user = await Course.create(newCourse);

    const response = {
      status: "success"
    };

    res.status(200).json(response);
  } catch (error) {

    console.log(error);

    const response = {
      status: "error",
      error: error
    };

    return res.status(500).json(response);
  }
});


module.exports = router;