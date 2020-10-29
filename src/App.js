import React from "react";
import Canvas from "./components/Canvas"




const score = 0; 
export const ScoreContext = React.createContext(0);

// const findContext = () => {
//     const {score, increment} = useContext(ScoreContext)
// }


function App() {
  // const [score, setScore] = React.useState(0);
  // console.log(score)
  function Greeting() {
    return (
      <h1>Welcome to Guac-A-Mole</h1>
    );
  };
  
  function Authors() {
    return (
      <div>
        <h3>A Mint Bean Hackathon project by:</h3>
        <h5>Elena Churilova, LaRena Iocco, Sarah Hudspeth</h5>
        <h6>Hackbright Graduates (Sept. 2020)</h6>
      </div>
    );
  };
  function ShowInstructions() {

    const[showInstructions, setShowInstructions] = React.useState(false)
    console.log(showInstructions)
    
    return (<React.Fragment>
      <button onClick={()=>setShowInstructions(!showInstructions)}>
        Instructions
        </button>
        {showInstructions && <Instructions/>}
        </React.Fragment>
    );
  };
  
  
  function Instructions(){
    console.log("instructions")
    return (
      <div className='container'>
          Here are some game instructions<br />
          <ol>
          <li>Select your level</li>
          <li>Collect as many avocados as you can to make guacamole</li>
          <li>5 misses is game over (Lose a tortilla chip for each miss)</li>
          <li> Click banner to restart the game!</li>
          </ol>
        </div>
    );
  };
  


  return (
    <div>
      <Greeting />
      <Authors />
      <ShowInstructions  />
      <ScoreContext.Provider value={score}>
      <Canvas />
        
      </ScoreContext.Provider>
       
  
    </div>
  )

}

export default App

