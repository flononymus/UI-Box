import React, {useState, useEffect} from 'react'

export default function Switches() {

    const [isSwitched, setSwitched] = useState(false)

    function handleSwitch() {
        setSwitched(!isSwitched);
    }


    return(
        <div>
            <h1> Switches </h1>

            <div className='centerContainer'>
                <div className='switcherDiv' 
                style={{backgroundColor: isSwitched ? "#f4f4f47f" : "#333", transition:'0.3s'}} 
                onMouseDown={handleSwitch} >
                    <div className='switcherCircle' 
                    style={{left: isSwitched ? "0px" : "100px", transition:'0.3s', backgroundColor: isSwitched ?  "#333" : "#f4f4f47f"}} 
                    />
                </div>
            </div>
            



        </div>    
    )
}