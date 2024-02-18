import React, { useEffect, useState } from "react";
import UpdateNoteModal from "./UpdateNoteModal";

const NoteCard = ({ title, description, id }) => {
  const handleDelete = () => {
    fetch("http://localhost:5000/notes/delete/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        window.alert(data.message);
      });
  };

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

  const fetchAllNotes = () => {
    fetch("http://localhost:5000/notes", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
        setNotes(data.data);
      });
  };

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <ul className="container flex flex-wrap gap-3">
      {notes.map((item) => (
        <NoteCard {...item} id={item._id} />
      ))}
    </ul>
  );
};

export default ListNote;
