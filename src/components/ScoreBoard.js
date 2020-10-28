import React, { useRef, useEffect, useState } from 'react'

function ScoreBoard() {
    const [score, setScore] = React.useState(0)


    return (
        <div>
            <button onClick={() => setScore(score + 1)}>Click Here</button>
            <div>Score: {score}</div>
        </div>
    )
}

export default ScoreBoard