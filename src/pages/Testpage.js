import React from 'react'


function testButton() {
    console.log('test button');
}

export default function Testpage() {
    return(
        <div>
            <h1>Testing</h1>

            <button class="button1" id="buttonTest" onClick={testButton}> Button </button>
        </div>
    )
}

// export default Testpage;