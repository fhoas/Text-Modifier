import React, { useState } from "react";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";
import SelectModify from "./components/SelectModify";
import { MainContext } from "./context/store";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedModify, setSelectedModify] = useState("");

  const data = {
    inputValue,
    setInputValue,
    selectedModify,
    setSelectedModify,
  };

  return (
    <MainContext.Provider value={data}>
      <div className="p-8 flex flex-col justify-center items-center">
        <div className="flex gap-2">
          <InputArea />
          <OutputArea />
        </div>
        <SelectModify />
      </div>
    </MainContext.Provider>
  );
}

export default App;
