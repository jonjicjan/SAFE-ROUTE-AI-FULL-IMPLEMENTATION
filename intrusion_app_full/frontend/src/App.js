
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const predict = async () => {
    const arr = input.split(",").map(Number);
    const res = await axios.post("http://localhost:5000/predict", {
      features: arr
    });
    setResult(res.data.prediction);
  };

  return (
    <div>
      <h1>Intrusion Detection</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={predict}>Predict</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}
