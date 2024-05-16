import React, { useContext } from "react";
import { MainContext } from "../context/store";

const InputArea = () => {
  const { setInputValue } = useContext(MainContext);
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <textarea className="border rounded border-black w-[600px] h-[500px] resize-none outline-none p-2" type="text" onChange={handleChange} />
    </div>
  );
};

export default InputArea;
