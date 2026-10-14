import { useState } from "react";



export default function App() {
  const[counter, setCounter] = useState({wert: 0,kommentar: "Test"});
  console.log("Rerender");

  return (
    <div className="App">
      <div>{counter.kommentar}</div>
      <div>{counter.wert}</div>
      <button onClick={() => {
        console.log(counter);
      setCounter({... counter, wert: counter.wert + 1})
      }}
      >Klick mich</button> 

      <button onClick={() => setCounter({wert: 0})}>Reset</button>
      <input onChange={(e) => setCounter({... counter, kommentar: e.target.value})} value={counter.kommentar} />
    </div>
  );
}
