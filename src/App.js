import "./App.css";
import React, {useState, useEffect} from "react";
import GetElementOfSequence from "./components/GetElementOfSequence";
import FibonacciCubes from "./components/FibonacciCubes";
import {getQueryHistory} from "./components/GetElementOfSequence/helpers";

function App() {
  const [queryHistory, setQueryHistory] = useState(getQueryHistory());
  const [refreshSwitch, setRefreshSwitch] = useState(true);
  useEffect(() => {
    setQueryHistory(getQueryHistory());
  }, [refreshSwitch]);
  return (
    <div className="App">
      <h1>Fibonacci sequence</h1>
      <GetElementOfSequence
        setRefreshSwitch={setRefreshSwitch}
        refreshSwitch={refreshSwitch}
      />
      <FibonacciCubes queryHistory={queryHistory} />
    </div>
  );
}

export default App;
