import React, { useRef, useEffect, useState } from 'react'

function ScoreBoard(props) {
    

    return (
        <div>
            
            <div classname="scoreboard">Score: {props.score}</div>
        </div>
    )
}

export default ScoreBoard