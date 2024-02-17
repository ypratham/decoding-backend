import React, { useEffect, useState } from "react";
import UpdateNoteModal from "./UpdateNoteModal";

const NoteCard = ({ title, description, id }) => {
  const handleDelete = () => {};

  return (
    <li className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleDelete}
            id="delete_btn"
            className="btn btn-sm btn-error"
          >
            Delete
          </button>
          <UpdateNoteModal
            id={id}
            noteDescription={description}
            noteTitle={title}
          />
        </div>
      </div>
    </li>
  );
};

const ListNote = () => {
  const [notes, setNotes] = useState([]);

  const fetchAllNotes = () => {};

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <ul className="container">
      {notes.map((item) => (
        <NoteCard {...item} id={item._id} />
      ))}
    </ul>
  );
};

export default ListNote;
