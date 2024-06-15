import React from 'react'


function testButton() {
    console.log('test button');
}

export default function Testpage() {
    return(
        <div>
            <h1>Testing</h1>

            <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{display:"flex", flex:"row"}}>
                <button className="button1" id="buttonTest" onMouseDown={testButton}> Button </button>
                <button className="button1" id="buttonTest" onMouseDown={testButton}> Button </button>
                <button className="button1" id="buttonTest" onMouseDown={testButton}> Button </button>
                </div>

                <div style={{display:"flex", flexDirection:"row"}}>
                <button className="button1" id="buttonTest" onMouseDown={testButton}> Button </button>
                <button className="button1" id="buttonTest" onMouseDown={testButton}> Button </button>
                <button className="button1" id="buttonTest" onMouseDown={testButton}> Button </button>
                </div>

                <div style={{display:"flex", flex:"row"}}>
                <button className="button1" id="buttonTest" onMouseDown={testButton}> Button </button>
                <button className="button1" id="buttonTest" onMouseDown={testButton}> Button </button>
                <button className="button1" id="buttonTest" onMouseDown={testButton}> Button </button>
                </div>
            </div>

        </div>
    )
}
