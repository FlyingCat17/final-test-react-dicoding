import React from "react";
import NoteItem from "./NoteItem";

export default function NoteItembody({ title, body, createdAt }) {
  return (
    <div className="p-4 bg-[#24273D] rounded-lg max-h-[300px] min-h-[300px]">
      <NoteItem title={title} body={body} createdAt={createdAt} />
    </div>
  );
}
