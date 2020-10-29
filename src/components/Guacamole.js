import guacamoleBowl from "./assets/Guacamole.png"

const Guacamole = props => {
    
    const guacSource = guacamoleBowl
    
    return  (<div className="guac" id="guacbowl">
                <img src={guacSource} width="300px" height="300px" alt="guacamole-bowl"/>
            </div>)

}

export default Guacamole

// Figure out a click event for the avocado.
// If you click on the avocado:
// score updates
// avocado dissapears early
