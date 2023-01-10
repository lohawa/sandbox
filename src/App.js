import React, { useState } from "react";
import "./styles.css";
import DurationPicker from "react-duration-picker";

export default function App() {
  const [duration, setDuration] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const onChange = (duration) => {
    const { hours, minutes, seconds } = duration;
    setDuration({ hours, minutes, seconds });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <DurationPicker
        onChange={onChange}
        initialDuration={{ hours: 2, minutes: 2, seconds: 3 }}
        maxHours={5}
        value={duration}
        seconds={0}
      />
    </div>
  );
}
