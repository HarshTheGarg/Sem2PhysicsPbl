import React, { useState, useEffect } from "react";

// Import styles
import "./style.css";
import UnitButton from "./UnitButton";

function MainContent() {
  const [selector, setSelector] = useState("siUnit");

  const [inputUnit, setInputUnit] = useState([]);
  const [outputTenMulitiplier, setOutputTenMultiplier] = useState(0);
  const [outputConstant, setOutputConstant] = useState(1);
  const [outputUnit, setOutputUnit] = useState([]);

  const [btnUnits, setBtnUnits] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:3000/api/converter/list/${selector}`, {
      "Content-Type": "application/json",
    })
      .then((res) => res.json())
      .then((data) => {
        setBtnUnits([data][0]);
      });
  }, [selector]);

  function onSelector(e) {
    // console.log(e);
    if (selector == "siUnit") {
      setSelector("cgsUnit");
      reset();
    } else {
      setSelector("siUnit");
      reset();
    }
  }

  async function submitPress() {
    setOutputConstant(1);
    setOutputUnit("");
    setOutputTenMultiplier(0);

    inputUnit.forEach(async (unit) => {
      const response = await fetch(
        `http://localhost:3000/api/converter/${selector}/${unit}`,
        {
          "Content-Type": "application/json",
        }
      );

      const result = await response.json();

      setOutputTenMultiplier(
        (current) => current + parseFloat(result.tenMultiplier)
      );

      setOutputUnit(
        (current) => `${current} ${String.fromCharCode(215)} ${result.unit}`
      );

      setOutputConstant((current) => current * parseFloat(result.constant));
    });
  }

  function reset() {
    setOutputConstant(1);
    setOutputUnit("");
    setOutputTenMultiplier(0);
    setInputUnit([]);
  }

  function unitPressed(e) {
    setInputUnit((current) => [...current, e.target.childNodes[0].data]);
  }

  return (
    <>
      <div className="converterSelectorContainer">
        <div
          className={`converterSelectorOption siSelector ${
            selector == "siUnit" ? "converterSelectorOptionSelected" : ""
          }`}
          onClick={onSelector}
        >
          To CGS
        </div>
        <div
          className={`converterSelectorOption cgsSelector ${
            selector == "cgsUnit" ? "converterSelectorOptionSelected" : ""
          }`}
          onClick={onSelector}
        >
          To SI
        </div>
      </div>

      <div className="displaysContainer">
        <div className="inputDisplayContainer displayContainer">
          <div className="inputDisplayHeader displayHeader">Input</div>
          <div className="inputDisplay display">
            <div className="displayContent">
              {inputUnit.map((element) => {
                return `${String.fromCharCode(215)} ${element} `;
              })}
            </div>
          </div>
        </div>

        <div className="outputDisplayContainer displayContainer">
          <div className="outputDisplayHeader displayHeader">Output</div>
          <div className="outputDisplay display">
            <div className="displayContent">
              {outputConstant} &times; 10
              <sup className="tenPower">{outputTenMulitiplier}</sup>{" "}
              {outputUnit}
            </div>
          </div>
        </div>
      </div>

      <div className="btnContainer">
        <button className="btn submit-btn" onClick={submitPress}>
          Submit
        </button>
        <button className="btn reset-btn" onClick={reset}>
          Reset
        </button>
      </div>

      <div className="unitSelectorContainer">
        {selector == "siUnit" && btnUnits
          ? btnUnits.map((unit) => {
              return (
                <UnitButton
                  key={unit._id}
                  text={unit.siUnit}
                  onClick={unitPressed}
                />
              );
            })
          : btnUnits.map((unit) => {
              return (
                <UnitButton
                  key={unit._id}
                  text={unit.cgsUnit}
                  onClick={unitPressed}
                />
              );
            })}
      </div>
    </>
  );
}

export default MainContent;
