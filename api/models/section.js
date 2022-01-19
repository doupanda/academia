import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    //courseId
    idCourse: { type: String, required: [true] },
    //name (name de que? pos de section... )
    //aunque quizas sea mejor ponerlo como "title"
    name: {type: String, required: [true]},
    time: {
        type: Number,
        default: Date.now
    }
});


// convert to model
const Section = mongoose.model('Section', sectionSchema);

export default Section;