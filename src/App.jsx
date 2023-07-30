import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(99);
  const [incrementor, setIncrementor] = useState(1);
  const [gameOver, setGameOver] = usestate(false);
  const addOne = () => {
    setCounter(counter + incrementor)
  }
  const upgrade = () => {
    if (counter >= 10) {
      setIncrementor(incrementor + 1);
      setCounter(counter - 10);
    }
    else {
      return alert("You can't afford that!")
    }
  }
  const resetGame = () => {
    setCounter(0)
    setIncrementor(1)
  }
  
  
  return (
  <main>
    {gameOver ? (
  <div>
    <h2>You Win!</h2>
    <button onClick={resetGame}>Play again?</button>
  </div>
) : (
  <>
    <h2>Current Score: {counter}</h2>
    <button className="button1" onClick={addOne}>
      +{incrementor}
    </button>

    <button className="button2" onClick={upgrade}>
      Pay 10 points to change from +{incrementor} to +{incrementor + 1}
    </button>
  </>
)}
</main>

)}

export default App;