import React, {useState} from "react";
import "./style.css";
import {
  clearQueryHistory,
  getN_elementFibonacciAndStoreInLocalStorage,
} from "./helpers";

export default function GetElementOfSequence({
  refreshSwitch,
  setRefreshSwitch,
}) {
  const [fibonacciElementToDisplay, setFibonacciElementToDisplay] = useState(0);
  return (
    <div className="fib-query">
      <h1>Explore the Fibonacci sequence</h1>
      <form>
        <label htmlFor={"fibonacci-element-number"}>
          Select the element of the Fibonacci sequence you want to see.
        </label>
        <input
          type={"number"}
          id={"fibonacci-element-number"}
          className="number-input"
          required
          min={0}
          max={100}
          defaultValue={0}
          placeholder={"Enter a number between 0 and 100"}
        />

        <button
          type={"submit"}
          className="flat-button"
          onClick={async (e) => {
            e.preventDefault();
            setFibonacciElementToDisplay(
              await getN_elementFibonacciAndStoreInLocalStorage(
                document.getElementById("fibonacci-element-number").value
              )
            );
            setRefreshSwitch(!refreshSwitch);
          }}
        >
          {" "}
          submit
        </button>
      </form>

      <h1
        aria-labelledby={`Value of the queried element of the fibonacci sequence`}
      >
        {" "}
        {fibonacciElementToDisplay}
      </h1>
      <button
        className="flat-button"
        onClick={() => {
          clearQueryHistory();
          setRefreshSwitch(!refreshSwitch);
        }}
      >
        {" "}
        Clear query history
      </button>
    </div>
  );
}
