import mongoose from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: { type: String, required: [true] },
    subtitle: { type: String, required: [true] },
    shortDescription: { type: String, required: [true] },
    description: { type: String, required: [true] },
    image: { type: String },
    url: { type: String, required: [true], unique: true },
    price: { type: Number },
    
    //trailerId
    idTrailer: { type: String, required: [true] },
    time: {
        type: Number,
        default: Date.now
    },
});

//Validator
courseSchema.plugin(uniqueValidator, { message: 'Error, la url ya existe.' });

// convert to model
const Course = mongoose.model('Course', courseSchema);

export default Course;