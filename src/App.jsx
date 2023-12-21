import { useState } from "react";
import NoteList from "./Components/NoteList";
import CreateModal from "./Components/CreateModal";

function App() {
  return (
    <>
      <div className="absolute left-0 top-0 -z-30 w-full h-[100px] lg:h-[200px] bg-gradient-to-r from-indigo-700 to-purple-700"></div>
      <div className="container">
        <div className="relative top-[50px] lg:top-[150px] flex flex-col gap-4">
          <h1 className="text-white text-2xl lg:text-3xl">
            NOTES <span className="font-bold">APP</span>
          </h1>
          <CreateModal />
          <NoteList />

          <h3 className="relative mt-4 text-white text-2xl">Archived Notes</h3>
        </div>
      </div>
    </>
  );
}

export default App;
