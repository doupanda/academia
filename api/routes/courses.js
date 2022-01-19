const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { checkAuth } = require('../middlewares/authentication.js');

//models import
import Course from '../models/course.js';
import Lesson from '../models/lesson.js';
import Section from '../models/section.js';

//MASTER QUERY
router.get('/courses-master-query', async (req, res) => {
	//Recuperamos Cursos Secciones y Lecciones en paraelos (sin await)
	var courses = Course.find({});
	var sections = Section.find({});
	var lessons = Lesson.find({});

	[courses, sections, lessons] = await Promise.all([courses, sections, lessons]);

	//trasformamos de mongoose a json
	courses = courses.map((course) => course.toJSON());
	sections = sections.map((section) => section.toJSON());
	lessons = lessons.map((lesson) => lesson.toJSON());

	//clases en secciones, secciones en cursos
  //recorro los cursos
  courses.forEach((course) => {
    //filtro las secciones que pertenecen a este curso y las anido en course.sections
    course.sections = sections.filter((section) => section.idCourse == course._id);
    course.sections.forEach((section) => {
      section.lessons = lessons.filter((lesson) => lesson.idSection == section._id);
    });
  });
	res.send(courses);
});

//OBTIENE todos los cursos POR URL
router.get('/courses', async (req, res) => {
	try {
		const courses = await Course.find();

		return res.json(courses);
	} catch (error) {
		console.log(error);
	}
});

//OBTIENE UN CURSO POR URL
router.get('/course', async (req, res) => {
	try {
		const course = await Course.findOne({ url: req.query.url });

		return res.json(course);
	} catch (error) {
		console.log(error);
	}
});

router.post('/course-insert', async (req, res) => {
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
			shortDescription: shortDescription,
			description: description,
			image: image,
			url: url,
			price: price,
			idTrailer: idTrailer,
		};

		const user = await Course.create(newCourse);

		const response = {
			status: 'success',
		};

		res.status(200).json(response);
	} catch (error) {
		console.log(error);

		const response = {
			status: 'error',
			error: error,
		};

		return res.status(500).json(response);
	}
});

module.exports = router;
