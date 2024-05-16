import React, { useContext, useState } from "react";
import { MainContext } from "../context/store";

const SelectModify = () => {
  const { setSelectedModify } = useContext(MainContext);
  const [selected, setSelected] = useState("bold");

  function handleClick(e) {
    const selectedTitle = e.target.title;
    setSelectedModify(selectedTitle);
    setSelected(selectedTitle);
  }

  return (
    <div className="flex gap-4">
      <button
        className={`bg-black text-white p-4 border-2  rounded ${
          selected === "bold" ? "border-blue-500" : "border-black"
        }`}
        title="bold"
        onClick={handleClick}
      >
        Bold
      </button>
      <button
        className={`bg-black text-white p-4 border-2 rounded ${
          selected === "italic" ? "border-blue-500" : "border-black"
        }`}
        title="italic"
        onClick={handleClick}
      >
        Italic
      </button>
      <button
        className={`bg-black text-white p-4 border-2 rounded ${
          selected === "morse" ? "border-blue-500" : "border-black"
        }`}
        title="morse-encode"
        onClick={handleClick}
      >
        Morse <br />
        <span className="text-sm">(encode)</span>
      </button>
      <button
        className={`bg-black text-white p-4 border-2 rounded ${
          selected === "morse" ? "border-blue-500" : "border-black"
        }`}
        title="morse-decode"
        onClick={handleClick}
      >
        Morse <br />
        <span className="text-sm">(decode)</span>
      </button>
    </div>
  );
};

export default SelectModify;
