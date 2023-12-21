import React from "react";

export default function NoteItem({ title, body, createdAt }) {
  return (
    <div className="flex flex-col gap-2 text-white">
      <h2 className="font-bold text-2xl">{title}</h2>
      <h4>{createdAt}</h4>  
      <p>{body}</p>
    </div>
  );
}
