import React, {useState} from "react";
import {getQueryHistory} from "../GetElementOfSequence/helpers";
import "./style.css";

export default function FibonacciCubes({queryHistory}) {
  if (!Object.keys(queryHistory).length) {
    return;
  }
  console.log("query history array", queryHistory);
  const sumOfQueriedFibonacciValues =
    queryHistory.reduce((sum, fibNum) => {
      return sum + parseInt(fibNum[1]);
    }, 0) || 1;

  const relativeFibonacciWidths = queryHistory.map((fibEntry) => [
    fibEntry[0],
    fibEntry[1] / sumOfQueriedFibonacciValues,
  ]);

  return (
    <div>
      <div className="cubes-area">
        {relativeFibonacciWidths.map((relativeWidth, index) => (
          <div
            key={relativeWidth[0]}
            style={{
              height: "100%",
              width: `${relativeWidth[1] * 100}%`,
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontSize: "3vw",
              fontWeight: "bold",
            }}
          >
            <p>#{queryHistory[index][0]}</p>
            <p>{queryHistory[index][1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
