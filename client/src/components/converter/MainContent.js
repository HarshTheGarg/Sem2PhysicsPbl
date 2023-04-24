import React, {useState, useEffect} from 'react'

// Import styles
import "./style.css";

function MainContent() {
  const [selector, setSelector] = useState("si");

  function onSelector() {
    selector == "si" ? setSelector("cgs") : setSelector("si");
  }

  function btnPress() {

  }

  return (
    <>
      <div className="converterSelectorContainer">
        <div className={`converterSelectorOption ${selector == "si" ? "converterSelectorOptionSelected" : ""}`} onClick={onSelector}>
          To SI
        </div>
        <div className={`converterSelectorOption ${selector == "cgs" ? "converterSelectorOptionSelected" : ""}`} onClick={onSelector}>
          To CGS
        </div>
      </div>

      <div className="displaysContainer">
        <div className="inputDisplayContainer displayContainer">
          <div className="inputDisplayHeader displayHeader">
            Input
          </div>
          <div className="inputDisplay display"></div>
        </div>
        <div className="outputDisplayContainer displayContainer">
          <div className="outputDisplayHeader displayHeader">
            Output
          </div>
          <div className="outputDisplay display"></div>
        </div>
      </div>

      <div className="btnContainer">
        <button className='btn submit' onSubmit={btnPress}>Submit</button>
      </div>
    </>
  )
}

export default MainContent