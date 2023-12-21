import React from "react";
import noteData from "../data/notes.json";
import NoteItembody from "./NoteItembody";

function NoteList() {
  if (noteData.length > 0) {
    return (
      <>
        <h1 className="text-white text-2xl">Active Notes</h1>
        <div className="grid grid-rows-1 lg:grid-cols-4 gap-5">
          {noteData.map((note) => (
            note.archived === false && (
              <NoteItembody
                key={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
              />
            )
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 className="text-white text-2xl">Active Notes</h1>
        <p className="px-3 py-2 bg-red-500 text-white w-fit rounded-lg">
          No Notes Available
        </p>
      </>
    );
  }
}

export default NoteList;
