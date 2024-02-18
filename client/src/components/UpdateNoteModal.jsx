import React, { useState } from "react";

const UpdateNoteModal = ({ noteTitle, noteDescription, id }) => {
  const [title, setTitle] = useState(noteTitle);
  const [description, setDescription] = useState(noteDescription);

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setDescription(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/notes/update/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        window.alert(data.message);
      });
  };

  return (
    <>
      <button
        id="update_btn"
        className="btn btn-sm"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Update
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col gap-3">
          <h2 className="text-xl font-bold">Update note</h2>
          <form
            onSubmit={handleFormSubmit}
            className="flex w-full flex-col gap-4"
          >
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Note title"
              className="input input-bordered w-full "
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
            <button id="btn_note" className="btn btn-accent w-max">
              Update note
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateNoteModal;
