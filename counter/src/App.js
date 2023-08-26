import { useState } from "react";
import "./App.css";
import Slider from '@mui/material/Slider';
import Box from "@mui/material/Box";

function App() {
  return <div className="App"><Counter /></div>;
}

function Counter() {
  let date = new Date();
  const [step, setStep] = useState(1);
  const [newStep, setNewStep] = useState(1)
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0)
  date.setDate(date.getDate() + newCount)

  return <>


    <Box sx={{ width: "30%", marginLeft: "auto", marginRight: "auto", marginTop: 4 }}>

      <Slider
        defaultValue={1}
        // getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={20}
        className="slider"
        onChange={(e) => { setNewStep(e.target.value) }}
      />
      step:{newStep}

    </Box>


    <div>
      <button onClick={() => setNewCount(newCount - newStep)}>
        -
      </button>

      <input type="text" onChange={(e) => { setNewCount(Number(e.target.value)) }} defaultValue={newCount} value={newCount} />
      <button onClick={() => setNewCount(newCount + newStep)}>
        +
      </button>
    </div>

    <div>
      {newCount === 0 ? `Today is ${date.toString().slice(0, 15)}` : newCount > 0 ? `${newCount} days from today is ${date.toString().slice(0, 15)}` : `${Math.abs(newCount)} days ago is ${date.toString().slice(0, 15)}`}
    </div>

    <button className={`${(newCount === 0 && newStep === 1) ? "button-block" : ""}`} onClick={() => {
      setNewCount(0)
      setNewStep(1)
    }}>
      reset
    </button>
  </>
}
export default App;
