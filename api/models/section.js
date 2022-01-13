import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    idCourse: { type: String, required: [true] },
    nameSection: {type: String, required: [true]},
    time: {
        type: Number,
        default: Date.now
    }
});


// convert to model
const Section = mongoose.model('Section', sectionSchema);

export default Section;