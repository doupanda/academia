import mongoose from "mongoose";

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    idSection: { type: String, required: [true] },
    idCourse: { type: String, required: [true] },
    nameLesson: { type: String, required: [true] },
    idVideo: { type: String, required: [true] },
    statusVideo: { type: Boolean, required: [true], default: false },
    time: {
        type: Number,
        default: Date.now
    }
});


// convert to model
const lesson = mongoose.model('lesson', lessonSchema);

export default lesson;