import React from "react";

export default function Modal({ visible, children, title, onClose }) {
  if (!visible) return null;
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 z-50"></div>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="bg-[#27272C] rounded-lg p-6 w-[90%] lg:w-[35%]">
          <div className="flex justify-between items-start text-white pb-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <button onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500 hover:text-red-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
