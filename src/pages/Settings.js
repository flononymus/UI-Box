import React from 'react'
import {useState} from "react"


function toggleDarkMode() {
    const isDarkMode = window.darkMode.toggle()
    // themeSource = isDarkMode ? 'Dark' : 'Light'
}

function toggleSystemMode() {
    window.darkMode.system()

}



export default function Settings() {
    return(
        <div>
            <h1>Settings</h1>

            <p>
                Current: 
                <strong id="theme-source">
                {themeSource}
                </strong>
            </p>
        
            <button className="settingsButton" id="toggle-dark-mode" onMouseDown={toggleDarkMode}>Toggle Dark Mode</button>
            <button className="settingsButton" id="reset-to-system" onMouseDown={toggleSystemMode}>Reset to System Theme</button>
        </div>
    )
}