import mongoose from "mongoose";

const traineeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    trainingSite: {
      type: mongoose.Schema.ObjectId,
      ref: "TrainingSite",
      required: true,
    },
    participantNumber: { type: String, required: true },

    githubUsername: String,

    graduationYear: Number,
    performance: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Perfomance",
      },
    ],
    gateInterviews: [
      { type: mongoose.Schema.Types.ObjectId, ref: "GateInterview" },
    ],
    status: {
      type: String,
      enum: ["active", "dropped", "graduated", "on_probation"],
      default: "active",
    },
  },
  { timestamps: true }
);

const Trainee = new mongoose.model("Trainee", traineeSchema);

export default Trainee;
