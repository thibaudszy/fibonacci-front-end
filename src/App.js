import "./App.css";
import React, {useState, useEffect} from "react";
import GetElementOfSequence from "./components/GetElementOfSequence";
import FibonacciCubes from "./components/FibonacciCubes";
import {getQueryHistory} from "./components/GetElementOfSequence/helpers";
import {
  decrementLastElementToDisplay,
  incrementLastElementToDisplay,
} from "./helpers";

function App() {
  const [queryHistory, setQueryHistory] = useState(getQueryHistory());
  const [refreshSwitch, setRefreshSwitch] = useState(true);
  const queryHistoryAsArray = Object.entries(queryHistory);
  const [lastElementToDisplay, setlastElementToDisplay] = useState(
    queryHistoryAsArray.length + 1
  );

  useEffect(() => {
    setQueryHistory(getQueryHistory());
    setlastElementToDisplay(queryHistoryAsArray.length + 1);
  }, [refreshSwitch]);

  return (
    <div className="App">
      <GetElementOfSequence
        setRefreshSwitch={setRefreshSwitch}
        refreshSwitch={refreshSwitch}
      />
      <button
        aria-describedby="Decrements the last element of the Fibonacci query to display"
        onClick={() =>
          decrementLastElementToDisplay(
            lastElementToDisplay,
            setlastElementToDisplay
          )
        }
        className="flat-button"
      >
        {"<"}
      </button>
      <button
        className="flat-button"
        aria-describedby="Increments the last element of the Fibonacci query to display"
        onClick={() =>
          incrementLastElementToDisplay(
            lastElementToDisplay,
            setlastElementToDisplay,
            queryHistoryAsArray.length
          )
        }
      >
        {">"}
      </button>
      <FibonacciCubes
        queryHistory={queryHistoryAsArray.slice(0, lastElementToDisplay)}
        setlastElementToDisplay={setlastElementToDisplay}
      />
    </div>
  );
}

export default App;
