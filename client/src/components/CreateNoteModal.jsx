const CreateNoteModal = () => {
  return (
    <section className="w-1/3 flex flex-col items-center gap-3">
      <h2 className="text-xl font-bold">New note</h2>
      <form className="flex w-full flex-col gap-4">
        <input
          type="text"
          placeholder="Note title"
          className="input input-bordered w-full "
        />

        <textarea
          placeholder="Description"
          className="textarea textarea-bordered textarea-lg w-full "
        ></textarea>
        <button className="btn btn-accent w-max">Create note</button>
      </form>
    </section>
  );
};

export default CreateNoteModal;
