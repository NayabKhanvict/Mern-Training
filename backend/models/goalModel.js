const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text field"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Goal", goalSchema);
