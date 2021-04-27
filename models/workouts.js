const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: String,
    trim: true,
  },

  excercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

const Workouts = mongoose.model("Workouts", workoutSchema);

module.exports = Workouts;
