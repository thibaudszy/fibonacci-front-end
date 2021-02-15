import React, {useState} from "react";
import {getQueryHistory} from "../GetElementOfSequence/helpers";
import "./style.css";

export default function FibonacciCubes({queryHistory}) {
  console.log("refreshing");
  if (!Object.keys(queryHistory).length) {
    return;
  }
  //const maxValue = Math.max(...Object.values(queryHistory));
  const sumOfQueriedFibonacciValues =
    Object.values(queryHistory).reduce(
      (sum = 0, fibNum) => sum + parseInt(fibNum)
    ) || 1;

  const relativeFibonacciWidths = Object.entries(
    queryHistory
  ).map((fibEntry) => [fibEntry[0], fibEntry[1] / sumOfQueriedFibonacciValues]);
  console.log("relativeFibonacciWidths", relativeFibonacciWidths);
  return (
    <div className="cubes-area">
      {relativeFibonacciWidths.map((relativeWidth) => (
        <div
          key={relativeWidth[0]}
          style={{
            height: "100%",
            width: `${relativeWidth[1] * 100}%`,
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
              16
            )}`,
          }}
        >
          {" "}
          {relativeWidth[0]}
        </div>
      ))}
    </div>
  );
}
