const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
        required: "Select a date"
    },
    exercises: [{
        type: {
            type: String,
            required: "Enter exercise type"
        },
        name: {
            type: String,
            required: "Enter exercise name"
        },
        duration: {
            type: Number,
            required: "Enter duration"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});


const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;
