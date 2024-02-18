import { Notes } from "../models/note.schema.js";

const responseModifier = (status, message, data) => {
  return {
    status,
    message,
    data,
  };
};

const fetchAllNodes = (req, res) => {
  Notes.find({})
    .then((data) => {
      res.send(responseModifier(true, "Notes fetched successfully!", data));
    })
    .catch();
};

const createNote = (req, res) => {
  const newNote = new Notes(req.body);
  newNote
    .save()
    .then(() => {
      res.send(responseModifier(true, "Notes created successfully!", null));
    })
    .catch();
};

// localhost:5000/note/delete/1

const updateNote = (req, res) => {
  const { id } = req.params;
  Notes.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.send(
        responseModifier(true, `${id} note updated successfully!`, null)
      );
    })
    .catch();
};

const deleteNote = (req, res) => {
  const { id } = req.params;
  Notes.findByIdAndDelete(id).then(() => {
    res.send(responseModifier(true, `${id} note deleted successfully!`, null));
  });
};

export { fetchAllNodes, createNote, updateNote, deleteNote };
