import React, { useRef, useEffect, useState } from 'react'

const Guacamole = props => {
    
    const guacSource = '../../Guacamole.png'
    
    return <img src={guacSource} width="150px" height="150px"/>

}


export default Guacamole

// Figure out a click event for the avocado.
// If you click on the avocado:
// score updates
// avocado dissapears early