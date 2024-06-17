import React, { useState } from 'react'

export default function Buttons() {

    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        console.log('button pressed');
        setIsPressed(true);
        setTimeout(() => {
          setIsPressed(false);
        }, 50);
      };

    return(
        <div>
            <h1>Testing</h1>

            <div className="buttonContainer">
            {/* <div className="centerContainer"> */}
                <div className="buttonRow">
                <button className="button1" id="buttonTest" onMouseDown={handlePress}> Button </button>
                <button className="button1" id="buttonTest" onMouseDown={handlePress}> Button </button>
                <button className="button1" id="buttonTest" onMouseDown={handlePress}> Button </button>
                </div>

                <div className="buttonRow">
                <button className="button1" id="buttonTest" onMouseDown={handlePress}> Button </button>
                <button className="button1" id="buttonTest" onMouseDown={handlePress}> Button </button>
                <button className="button1" id="buttonTest" onMouseDown={handlePress}> Button </button>
                </div>

                <div className="buttonRow">
                <button className="button1" id="buttonTest" onMouseDown={handlePress}> Button </button>
                <button className="button1" id="buttonTest" onMouseDown={handlePress}> Button </button>
                <button className="button1" id="buttonTest" onMouseDown={handlePress}> Button </button>
                </div>
            </div>

        </div>
    )
}
