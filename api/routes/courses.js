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


module.exports = router;