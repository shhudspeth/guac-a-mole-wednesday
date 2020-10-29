import React, { useRef, useEffect, useState } from 'react'

const Guacamole = props => {
    
    const guacSource = 'https://shhudspeth.github.io/guac-a-mole-wednesday/Guacamole.png'
    
    return  (<div className="guac" id="guacbowl">
                <img src={guacSource} width="150px" height="150px"/>
            </div>)

}

export default Guacamole

// Figure out a click event for the avocado.
// If you click on the avocado:
// score updates
// avocado dissapears early
