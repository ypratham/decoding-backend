import { responseModifier } from "../config/utils.js";
import { Notes } from "../models/note.schema.js";

const fetchAllNotes = (req, res) => {
  Notes.find({})
    .then((notes) => {
      res.send(responseModifier(true, notes, "All notes fetched successfully"));
    })
    .catch((error) => {
      res.send(responseModifier(false, error, "Failed to fetch notes"));
    });
};

const createNote = (req, res) => {
  const newNote = new Notes(req.body);
  newNote
    .save()
    .then((data) => {
      res.send(responseModifier(true, data, "Note created successfully"));
    })
    .catch((error) => {
      res.send(responseModifier(false, error, "Failed to create note"));
    });
};

const deleteNoteById = (req, res) => {
  const { id } = req.params;
  Notes.findByIdAndDelete(id)
    .then(() => {
      res.send(responseModifier(true, null, "Note deleted successfully"));
    })
    .catch((error) => {
      res.send(responseModifier(false, error, "Failed to delete note"));
    });
};
const updateNoteById = (req, res) => {
  const { id } = req.params;
  const update = req.body;
  Notes.findByIdAndUpdate(id, update, { new: true })
    .then((updatedNote) => {
      if (updatedNote) {
        res.send(
          responseModifier(true, updatedNote, "Note updated successfully")
        );
      } else {
        res.send(responseModifier(false, null, "Note not found"));
      }
    })
    .catch((error) => {
      res.send(responseModifier(false, error, "Failed to update note"));
    });
};

const fetchNoteById = (req, res) => {
  const { id } = req.params;
  Notes.findById(id)
    .then((note) => {
      if (note) {
        res.send(responseModifier(true, note, "Note fetched successfully"));
      } else {
        res.send(responseModifier(false, null, "Note not found"));
      }
    })
    .catch((error) => {
      res.send(responseModifier(false, error, "Failed to fetch note"));
    });
};

export {
  fetchAllNotes,
  createNote,
  deleteNoteById,
  updateNoteById,
  fetchNoteById,
};
