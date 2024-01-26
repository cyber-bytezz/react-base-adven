
import React, {useState} from "react"

function colourpicker (){
    
    const [color, setColor] =useState("#FFFFFF")


    function handleColorchange(event){
        setColor(event.target.value)
    }
    
    
    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-dip" style={{backgroundColor:color}}>
                <p>Selected Colour:{color}</p>
                <label>Select a colour:</label>
                <input type="color" value={color} onChange={handleColorchange}/>
            </div>
        </div>
    )
}

export default colourpicker