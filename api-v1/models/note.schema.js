import { Model, Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Notes = new Model("Note", noteSchema);

export { Notes };
