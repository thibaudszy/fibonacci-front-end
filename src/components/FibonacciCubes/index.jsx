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

  const generateRandomColor = () => {
    const randomColor = [0, 0, 0].map((i) =>
      Math.floor(Math.random() * (255 - 1) + 1)
    );
    return `RGB(${randomColor.join(",")})`;
  };
  return (
    <div>
      <div className="cubes-area">
        {relativeFibonacciWidths.map((relativeWidth, index) => (
          <div
            key={relativeWidth[0]}
            style={{
              height: "100%",
              width: `${relativeWidth[1] * 100}%`,
              backgroundColor: generateRandomColor(),
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontSize: "max(5vh, 20pt)",
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
