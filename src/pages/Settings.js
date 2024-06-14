import React from 'react'

const Settings = () => {
    return(
        <div>
            <h1>Settings</h1>

            <p>Current theme source: <strong id="theme-source">System</strong></p>
        
            <button id="toggle-dark-mode">Toggle Dark Mode</button>
            <button id="reset-to-system">Reset to System Theme</button>
        </div>
    )
}

export default Settings;