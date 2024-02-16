import { Notes } from "../models/note.schema.js";

const fetchAllNotes = (req, res) => {
  res.send("Hello");
};

const createNote = async(req, res) => {
  res.send("Creating note");
  try { 
    let note = new Notes(req.body)
    await note.save();
    res.send (responseModifier(true, note, "note created successfully"))
  } catch (error) {
    res.send (responseModifier(false, null, "smth went wrong"))
  }
};
const deleteNoteById = (req, res) => {
  res.send("Delete note");
};
const updateNoteById = (req, res) => {
  res.send("Update note");
};
const fetchNoteById = (req, res) => {
  res.send("Fetch note by id");
};

export {
  fetchAllNotes,
  createNote,
  deleteNoteById,
  updateNoteById,
  fetchNoteById,
};
