const fetchAllNotes = (req, res) => {
  res.send("Hello");
};

const createNote = (req, res) => {
  res.send("Creating note");
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
