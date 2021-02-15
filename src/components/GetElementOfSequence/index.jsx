import React from "react";
import {getN_elementFibonacciAndStoreInLocalStorage} from "./helpers";

export default function GetElementOfSequence() {
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
        />

        <button
          type={"submit"}
          onClick={(e) => {
            e.preventDefault();
            getN_elementFibonacciAndStoreInLocalStorage(
              document.getElementById("fibonacci-element-number").value
            );
          }}
        >
          {" "}
          submit
        </button>
      </form>
    </div>
  );
}
