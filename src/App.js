import React from "react";
import Canvas from "./components/Canvas"
import Chip from "./components/Chip"
import ScoreBoard from "./components/ScoreBoard"

function App() {
  
  return (
    <div>
        <Canvas />
        <div className='row'>
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
        </div>
        <ScoreBoard />
  
    </div>
  )

}

export default App

