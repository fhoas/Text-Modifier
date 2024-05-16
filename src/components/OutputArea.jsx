import React, { useContext } from "react";
import { MainContext } from "../context/store";
import morsify from "morsify";

const OutputArea = () => {
  const { inputValue, selectedModify } = useContext(MainContext);

  const encodeToMorse = (text) => {
    return morsify.encode(text);
  };

    const decodeToMorse = (text) => {
      return morsify.decode(text);
    };

  const processText = () => {
    switch (selectedModify) {
      case "bold":
        return <strong>{inputValue}</strong>;
      case "italic":
        return <em>{inputValue}</em>;
      case "morse-encode":
        return <span>{encodeToMorse(inputValue)}</span>;
      case "morse-decode":
        return <span>{decodeToMorse(inputValue)}</span>;
      default:
        return inputValue;
    }
  };

  return (
    <div>
      <p className="text-lg border rounded border-black w-[600px] h-[500px] resize-none outline-none p-2">
        {processText()}
      </p>
    </div>
  );
};

export default OutputArea;
