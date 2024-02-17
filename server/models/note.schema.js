import { model, Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Notes = new model("Note", noteSchema);

export { Notes };
