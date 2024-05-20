import React, { useContext } from "react";
import { MainContext } from "../context/store";
import { MdContentCopy } from "react-icons/md";

const InputArea = () => {
  const { setInputValue, inputValue } = useContext(MainContext);
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function copyClipboard() {
    navigator.clipboard.writeText(inputValue);
  }

  return (
    <div className="relative">
      <textarea
        className="border rounded border-black w-[600px] h-[500px] resize-none outline-none p-2"
        type="text"
        onChange={handleChange}
      />
      <button
        className="absolute top-0 right-0 p-2 active:text-violet-700"
        onClick={copyClipboard}
      >
        <MdContentCopy size={28} />
      </button>
    </div>
  );
};

export default InputArea;
