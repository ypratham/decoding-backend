import { useState } from "react";

const CreateNoteModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
  };

  return (
    <section className="w-1/3 flex flex-col items-center gap-3">
      <h2 className="text-xl font-bold">New note</h2>
      <form onSubmit={handleFormSubmit} className="flex w-full flex-col gap-4">
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
          Create note
        </button>
      </form>
    </section>
  );
};

export default CreateNoteModal;
