import React from 'react'


function testButton() {
    console.log('test button');
}

export default function Testpage() {
    return(
        <div>
            <h1>Testing</h1>

            <button className="button1" id="buttonTest" onMouseDown={testButton}> Button </button>
        </div>
    )
}
