import React, { useRef, useEffect, useState, useContext } from 'react'
import {score, ScoreContext} from "../App"
// import Chip from "./components/Chip"
// import ScoreBoard from "./components/ScoreBoard"


const Canvas = props => {
    
    const canvasRef = useRef(null)

    const avocado_positions = [
        { x: 50, y: 150,},
        { x: 100, y: 225},
        { x: 100, y: 300}, 
        { x: 150, y: 100},
        { x: 200, y: 175},
        { x: 200, y: 300},
        { x: 300, y: 50},
        { x: 300, y: 150},
        { x: 375, y: 225},
    ];

    const initState = { 
                        // timer: 0, 
                        cells: new Array(9).fill(false),
                        avoPosition: {x: 0, y: 0}
                    }

    const [ gameState, setGameState ] = useState(initState)
    const {score} = useContext(ScoreContext)
    // let score = useContext(ScoreContext);
    console.log(score)

    function updateState() {
        const position = randomNumber(0, gameState.cells.length)
        const newCells = new Array(9).fill(false)
        newCells[position] = true
        setGameState( {cells: newCells, avoPosition: {x: avocado_positions[position].x, y: avocado_positions[position].y}} )
        console.log(`new position: ${position}`)
        console.log(gameState)
        console.log(`x: ${avocado_positions[position].x}, y: ${avocado_positions[position].y}`)
    }

    const newBoard = new Image()
    newBoard.src = '../../cuttingboard.png'
    const small_avocado = '../../small_avocado.png'
    const newAvocado = new Image()
    newAvocado.src = small_avocado

    function showAvocados(ctx) {

        for (const i in gameState.cells) {
            if (gameState.cells[i] === true) {
                displayAvocado(avocado_positions[i], ctx)
            }
        }
    }

    // const timer2 = setInterval(updateState, 8000)
    

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      };

    
    function displayAvocado(position, ctx) {

        // const small_avocado = '../../small_avocado.png'
        // const newAvocado = new Image()
        // newAvocado.src = small_avocado
        
        // console.log(position.x)
        // console.log(position.y)

        ctx.drawImage(newAvocado, position.x, position.y, 100, 100)
    }

    const draw = (ctx) => {
        ctx.drawImage(newBoard, 0, 0)
        showAvocados(ctx)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        draw(context)
        // handleClick()


    })
    function handleClick(event) {
        const xPosition = event.clientX
        const yPosition = event.clientY
        // alert(`x: ${xPosition} y:${yPosition}`)
        const gameStateX = gameState.avoPosition.x
        const gameStateY = gameState.avoPosition.y
        if (((gameStateX + 100) > xPosition && xPosition > gameStateX) && ((gameStateY + 100) > yPosition && yPosition > gameStateY)) {
            // score  = score + 100
            alert(`You got the avocado  x: ${xPosition} y: ${yPosition}  gameX: ${gameStateX} gamey: ${gameStateY} SCORE: ${score} `)
                //  increase score count
                
                
            } else {
                alert(`You Missed  x: ${xPosition} y: ${yPosition}  gameX: ${gameStateX} gamey: ${gameStateY}`)
                // decrease chips
                // check if chips == 0
            }

    }

    // andleClick = () => {
    //     console.log('this is:', this);
    //   }

    console.log("I ran this func again")
    useEffect(() => {
        const interval = setInterval(() => {
            updateState();
        }, 3000);
        return () => clearInterval(interval);
      }, []);

    function avocadoClick(position, ctx, event) {
        // Do we need to add an onClick element to the canvas in the return?
        // this onCLick could trigger avocado click, which would check the location
        // of the event.  
        // Then check if that location is within the pixel range of current avocado
        // range can be determined by start being x,y in array and end being
        // x,y + size of avocado (currently 100px)
    }

    
    return (
            <div>
                <canvas id="canvas" onClick={handleClick} width="500px" height="500px" ref={canvasRef} {...props}/>
            </div>  
    )
  
}

export default Canvas
// export function ScoreBoard2() {
//     const [score, setScore] = useState(0)


//     return (
//         <div>
//             <button onClick={() => setScore(score + 1)}>Click Here</button>
//             <div>Score: {score}</div>
//         </div>
//     )
// }


// Figure out a click event for the avocado.
// If you click on the avocado:
// score updates
// avocado dissapears early