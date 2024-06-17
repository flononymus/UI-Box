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
                <div className='switcherDiv' style={{backgroundColor: isSwitched ? "#f4f4f47f" : "#333"}}>
                    <div className='switcherCircle' 
                    // style={{left: isSwitched ? "0%" : "100%"}} 
                    style={{justifySelf: isSwitched ? "right" : "left",
                       backgroundColor: isSwitched ?  "#333" : "#f4f4f47f"
                    }} 
                    onClick={handleSwitch} />
                </div>
            </div>
            



        </div>    
    )
}