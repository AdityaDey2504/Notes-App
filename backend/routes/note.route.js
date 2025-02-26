import express from "express";
import { createNote, deleteNote, getNote, getNotes, updateNote } from "../controller/note.controller.js";

const router = express.Router();

router.get("/", getNotes)
router.get("/:id", getNote)
router.post("/", createNote)
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)

export default router;