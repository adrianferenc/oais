const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sequenceSchema = new Schema(
  {
    sequenceId: { type: String, required: true, unique: true },
    sequenceArray: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sequence", sequenceSchema);
