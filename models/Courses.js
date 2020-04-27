const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

    "Course Id": {
        type: Number
    },
    "Course Name": {
        type: String
    },
    "Provider": {
        type: String
    },
    "Universities/Institutions": {
        type: String
    },
    "Parent Subject": {
        type: String
    },
    "Child Subject": {
        type: String
    },
    Url: {
        type: String
    },
    "Next Session Date": {
        type: String
    },
    Length: {
        type: String
    },
    "Video(Url)": {
        type: String
    }
})

module.exports = mongoose.model('Course', CourseSchema,"course");





