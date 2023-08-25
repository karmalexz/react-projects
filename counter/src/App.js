import { useState } from "react";
import "./App.css";

function App() {
  return <div className="App"><Counter /></div>;
}

function Counter() {
  let date = new Date();
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  date.setDate(date.getDate() + count)

  return <>
    <div>
      <button onClick={() => setStep(step - 1)}>
        -
      </button>
      Step:{step}
      <button onClick={() => setStep(step + 1)}>
        +
      </button>
    </div>

    <div>
      <button onClick={() => setCount(count - step)}>
        -
      </button>
      Count:{count}
      <button onClick={() => setCount(count + step)}>
        +
      </button>
    </div>

    <div>
      {count === 0 ? `Today is ${date.toString().slice(0, 15)}` : count > 0 ? `${count} days from today is ${date.toString().slice(0, 15)}` : `${Math.abs(count)} days ago is ${date.toString().slice(0, 15)}`}
    </div>
  </>
}
export default App;
