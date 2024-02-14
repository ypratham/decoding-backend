import express from "express";
import {
  createNote,
  deleteNoteById,
  fetchAllNotes,
  fetchNoteById,
  updateNoteById,
} from "../services/note.service.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});
router.post("/create", createNote);
router
  .route("/:id")
  .delete(deleteNoteById)
  .put(updateNoteById)
  .get(fetchNoteById);

export { router as NoteRouter };
