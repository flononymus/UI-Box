
// function attachEventListeners() {
//   const settingsLink = document.getElementById('settings-link');
//   const homeLink = document.getElementById('home-link');
//   const testLink= document.getElementById('test-link');
//   const themeSource = document.getElementById('theme-source');
//   const toggleDarkMode = document.getElementById('toggle-dark-mode');
//   const toggleSystemMode= document.getElementById('reset-to-system');

//   const clickType = "mousedown";

//   if (themeSource) {
//     toggleDarkMode.addEventListener(clickType, async () => {
//       const isDarkMode = await window.darkMode.toggle()
//       themeSource.innerHTML = isDarkMode ? 'Dark' : 'Light'
//     })
    
//     toggleSystemMode.addEventListener(clickType, async () => {
//       await window.darkMode.system()
//       themeSource.innerHTML = 'System'
//     })

//   }


//   if (homeLink) {
//     homeLink.addEventListener(clickType, async () => {
//       await window.htmlSource.home();
//     });
//   }

//   if (settingsLink) {
//     settingsLink.addEventListener(clickType, async () => {
//       await window.htmlSource.settings();
//     });
//   }

//   if (testLink) {
//     testLink.addEventListener(clickType, async () => {
//      await window.htmlSource.test();
//     });
//   }
// }

// document.addEventListener('DOMContentLoaded', attachEventListeners);


import React, { useState } from 'react';
import {createRoot} from 'react-dom/client'
// import ReactDOM from 'react-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Testpage from './pages/Testpage';



const App = () => {

    const [page, setPage] = useState('Home');

    let CurrentPage;
    switch (page) {
        case 'Home':
            CurrentPage = Home;
            break;
        case 'Settings':
            CurrentPage = Settings;
            break;
        case 'Testpage':
            CurrentPage = Testpage;
            break;
        default:
            CurrentPage = Home;
            // CurrentPage = Settings;
    }

    window.loadPage = (page) => {
        setPage(page);
    };

    return <CurrentPage />;
};


function attachEventListeners() {

  // const clickType = "mousedown";


  const homeButton= document.getElementById('homeButton');
  const settingsButton= document.getElementById('settingsButton');
  const testButton= document.getElementById('testpageButton');

    if (homeButton) {
    // homeButton.addEventListener(clickType, () => window.loadPage('Home'));
    homeButton.addEventListener('mousedown', () => { window.loadPage('Home'),console.log('setting pressed')});
  }

  if (settingsButton) {
    // settingsButton.addEventListener(clickType,() => window.loadPage('Settings'));
    settingsButton.addEventListener('mousedown',() => { window.loadPage('Settings'),console.log('setting pressed')});
  }

  if (testButton) {
    // testButton.addEventListener(clickType, () =>  window.loadPage('Testpage'));
    testButton.addEventListener('mousedown', () =>  {window.loadPage('Testpage'),console.log('test pressed')});
  }

}
document.addEventListener('DOMContentLoaded', attachEventListeners)

// document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root')
  const root = createRoot(container);
  root.render(<App/>)

  // document.getElementById('Home').addEventListener('click', () => window.loadPage('Home'));
  // document.getElementById('Settings').addEventListener('click', () => window.loadPage('Settings'));
  // document.getElementById('Testpage').addEventListener('click', () => window.loadPage('Testpage'));
// });