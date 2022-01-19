import mongoose from "mongoose";

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    //sectionId
    idSection: { type: String, required: [true] },
    //courseId
    idCourse: { type: String, required: [true] },
    //name (lessonName sería redundante, porque pos si estamos dentro de lesson... )
    //aunque quizas sea mejor ponerlo como "title"
    nameLesson: { type: String, required: [true] },
    //videoId
    idVideo: { type: String, required: [true] },
    //videoStatus
    statusVideo: { type: Boolean, required: [true], default: false },
    time: {
        type: Number,
        default: Date.now
    }
});


// convert to model
const lesson = mongoose.model('lesson', lessonSchema);

export default lesson;