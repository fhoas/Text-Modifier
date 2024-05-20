import React, { useContext } from "react";
import { MainContext } from "../context/store";
import morsify from "morsify";
import { MdContentCopy } from "react-icons/md";

const OutputArea = () => {
  const { inputValue, selectedModify } = useContext(MainContext);

  const encodeToMorse = (text) => {
    return morsify.encode(text);
  };

  const decodeToMorse = (text) => {
    return morsify.decode(text);
  };

  const getTextStyleAndProcessedText = () => {
    let style = "font-bold";
    let processedText = inputValue;

    switch (selectedModify) {
      case "bold":
        style = "font-bold";
        break;
      case "italic":
        style = "italic";
        break;
      case "morse-encode":
        processedText = encodeToMorse(inputValue);
        break;
      case "morse-decode":
        processedText = decodeToMorse(inputValue);
        break;
      default:
        style = "";
    }

    return { style, processedText };
  };

  const { style, processedText } = getTextStyleAndProcessedText();

  function copyClipboard() {
    navigator.clipboard.writeText(processedText);
  }

  return (
    <div className="relative">
      <p
        className={`text-lg border rounded border-black w-[600px] h-[500px] resize-none outline-none p-2 ${style}`}
      >
          <span>{processedText}</span>
      </p>
      <button
        className="absolute top-0 right-0 p-2 active:text-violet-700"
        onClick={copyClipboard}
      >
        <MdContentCopy size={28} />
      </button>
    </div>
  );
};

export default OutputArea;
