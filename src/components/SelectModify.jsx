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
    <div className="flex gap-4 select-none">
      <button
        className={`text-white p-2 rounded ${
          selected === "bold" ? "bg-[#494949]" : "bg-black"
        }`}
        title="bold"
        onClick={handleClick}
      >
        Bold
      </button>
      <button
        className={` text-white p-2 rounded ${
          selected === "italic" ? "bg-[#494949]" : "bg-black"
        }`}
        title="italic"
        onClick={handleClick}
      >
        Italic
      </button>
      <button
        className={`text-white p-2 rounded flex items-center justify-center gap-1 ${
          selected === "morse-encode" ? "bg-[#494949]" : "bg-black"
        }`}
        title="morse-encode"
        onClick={handleClick}
      >
        Morse <br />
        <span className="text-sm">(encode)</span>
      </button>
      <button
        className={` text-white p-2 rounded flex items-center justify-center gap-1 ${
          selected === "morse-decode" ? "bg-[#494949]" : "bg-black"
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
