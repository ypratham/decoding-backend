import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import { NoteRouter } from "./routes/note.route.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.use("/notes", NoteRouter);

app.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}`);
});

db();
