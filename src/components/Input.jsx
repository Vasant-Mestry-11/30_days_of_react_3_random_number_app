import { useState } from "react";
import "./Input.css";

const Input = () => {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [generatedNumber, setGeneratedNumber] = useState("");
  function handleGenerate() {
    const start = parseInt(minValue);
    const end = parseInt(maxValue);
    const randomNumber = Math.floor(Math.random() * (end - start) + start);
    setGeneratedNumber(randomNumber);
  }
  return (
    <div className="wrapper">
      <h1>{generatedNumber}</h1>
      <input
        type="number"
        min="0"
        value={minValue}
        onChange={(e) => setMinValue(e.target.value)}
        className="wrapper__input"
        placeholder="Start range"
      />
      <input
        type="number"
        min="0"
        value={maxValue}
        onChange={(e) => setMaxValue(e.target.value)}
        className="wrapper__input"
        placeholder="End range"
      />
      <button
        className="wrapper_button"
        onClick={handleGenerate}
        disabled={!minValue || !maxValue}
      >
        Generate
      </button>
    </div>
  );
};

export default Input;
