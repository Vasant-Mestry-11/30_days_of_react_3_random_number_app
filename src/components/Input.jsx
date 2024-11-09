import { useState } from "react";
import "./Input.css";

// const RESTRICTED_KEY_CODE = [".", "e", "-"];

const Input = () => {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [generatedNumber, setGeneratedNumber] = useState("");
  // const [isDisable, setDisable] = useState(false);

  // useEffect(() => {
  //   console.log("called", minValue, maxValue);
  //   if (minValue <= maxValue || maxValue <= minValue) {
  //     setDisable(true);
  //   } else {
  //     setDisable(false);
  //   }
  // }, [minValue, maxValue]);

  function handleGenerate() {
    const minNumber = Math.floor(Math.random() * minValue) + 1;
    const maxNumber = Math.floor(Math.random() * maxValue) + 1;

    if (maxNumber <= minNumber) {
      handleGenerate();
    } else {
      setGeneratedNumber(maxNumber);
    }
  }
  return (
    <div className="wrapper">
      <h1>{generatedNumber}</h1>
      <input
        type="number"
        min="0"
        value={minValue}
        onChange={(e) => {
          // if (RESTRICTED_KEY_CODE.includes(e.target.value)) {
          //   return;
          // }
          setMinValue(e.target.value);
        }}
        // onKeyDown={(e) => {
        //   if (RESTRICTED_KEY_CODE.includes(e.key)) {
        //     return;
        //   }
        // }}
        className="wrapper__input"
      />
      <input
        type="number"
        min="0"
        value={maxValue}
        onChange={(e) => {
          setMaxValue(e.target.value);
        }}
        // onKeyDown={(e) => {
        //   if (RESTRICTED_KEY_CODE.includes(e.key)) {
        //     return;
        //   }
        // }}
        className="wrapper__input"
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
