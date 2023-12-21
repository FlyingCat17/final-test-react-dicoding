import React, { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import Modal from "./Modal";
import noteData from "../data/notes.json";

export default function CreateModal() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const [handleInputData, sethandleInputData] = useState({
    title: "",
    body: "",
  });

  const [existsData, setExistsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("../data/notes.json");
      console.log(response);
      while (response) {
        console.log(response.json());
        // setExistsData(data);
        // break;
      }
    } catch (error) {
      console.error("error => ", error);
    }
  };

  return (
    <>
      <button
        className="bg-slate-200 rounded-lg p-2 flex flex-row items-center gap-3 w-fit mt-[20px] px-4"
        onClick={handleOpenModal}
      >
        <img src={reactLogo} alt="react logo" className="w-8 h-8" />
        <span className="text-slate-800 font-bold">Add Note</span>
      </button>

      <Modal visible={openModal} title={"Add Note"} onClose={handleCloseModal}>
        <div className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => {
              sethandleInputData({ ...handleInputData, title: e.target.value });
            }}
            className="border border-gray-700 rounded-lg p-2 bg-[#3a3a3d] text-white focus:outline-none"
          />
          <textarea
            onChange={(e) => {
              sethandleInputData({ ...handleInputData, body: e.target.value });
            }}
            placeholder="Body"
            className="border border-gray-700 rounded-lg p-2 bg-[#3a3a3d] text-white focus:outline-none"
          ></textarea>
          <button
            className="bg-slate-200 rounded-lg p-2 flex flex-row items-center gap-3 w-fit mt-[20px] px-4"
            onClick={() => {
              handleInsertNote({
                title: noteData.title,
                body: noteData.body,
              });
            }}
          >
            <span className="text-slate-800 font-bold">Add Note</span>
          </button>
        </div>
      </Modal>
    </>
  );

  function handleInsertNote({ title, body }) {
    const newNote = {
      id: noteData.length + 1,
      title,
      body,
      createdAt: new Date().toLocaleDateString(),
      archived: false,
    };

    handleCloseModal();
  }
}
