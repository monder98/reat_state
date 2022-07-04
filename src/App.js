import "./App.css";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(12);
  const [Text, setText] = useState("");
  const [Show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <input type="text" onChange={(e) => setText(e.target.value)}></input>
        <h1>text :{Text}</h1>
        <button onClick={() => setShow(!Show)}>show</button>
        {Show ? <div>hello</div> : null}
      </header>
    </div>
  );
}

export default App;
