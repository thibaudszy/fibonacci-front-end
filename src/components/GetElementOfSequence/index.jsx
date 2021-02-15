import React, {useState} from "react";
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
    <div>
      <form>
        <label htmlFor={"fibonacci-element-number"}>
          {" "}
          What element of the Fibonnacci sequence do you want to see?{" "}
        </label>
        <input
          type={"number"}
          id={"fibonacci-element-number"}
          required
          min={0}
          max={100}
          defaultValue={0}
          placeholder={"Enter a number between 0 and 100"}
        />

        <button
          type={"submit"}
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
      <button onClick={clearQueryHistory}> Clear query history</button>
      <h1> {fibonacciElementToDisplay}</h1>
    </div>
  );
}
