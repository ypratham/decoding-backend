import "./App.css";
import CreateNoteModal from "./components/CreateNoteModal";
import ListNote from "./components/ListNote";

function App() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <nav className="flex justify-between p-4 border-b-2 border-b-slate-600">
        <h1 className="text-2xl font-bold">NoteSync</h1>
        <p>CSI-PCE</p>
      </nav>

      <main className="flex flex-col gap-3 items-center">
        <CreateNoteModal />
        <ListNote />
      </main>
    </div>
  );
}

export default App;
