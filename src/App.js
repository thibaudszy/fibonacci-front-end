import "./App.css";
import React, {useState, useEffect} from "react";
import GetElementOfSequence from "./components/GetElementOfSequence";

function App() {
  return (
    <div className="App">
      <h1>Fibonacci sequence</h1>
      <GetElementOfSequence />
    </div>
  );
}

export default App;
