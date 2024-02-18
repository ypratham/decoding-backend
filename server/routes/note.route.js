import express from "express";
import {
  createNote,
  deleteNote,
  fetchAllNodes,
  updateNote,
} from "../services/note.service.js";

const router = express.Router();

//fetch all notes from db
router.get("/", fetchAllNodes);

//create note
router.post("/create", createNote);

//update note
router.put("/update/:id", updateNote);

//delete note
router.delete("/delete/:id", deleteNote);

export { router as NoteRouter };
