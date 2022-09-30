import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(
    JSON.parse(localStorage.getItem("counter")) || 0
  );

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    if (counter === 0) return;
    setCounter(counter - 1);
  }

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  return (
    <div className="App">
      <h1>Counter with local storage</h1>
      <span>{counter}</span>
      <button onClick={increment}>+ 1</button>
      <button onClick={decrement}>- 1</button>
    </div>
  );
}

export default App;
