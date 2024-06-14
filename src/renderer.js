
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
import ReactDOM from 'react-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

const App = () => {
    const [page, setPage] = useState('Page1');

    let CurrentPage;
    switch (page) {
        case 'Page1':
            CurrentPage = Page1;
            break;
        case 'Page2':
            CurrentPage = Page2;
            break;
        case 'Page3':
            CurrentPage = Page3;
            break;
        default:
            CurrentPage = Page1;
    }

    window.loadPage = (page) => {
        setPage(page);
    };

    return <CurrentPage />;
};

ReactDOM.render(<App />, document.getElementById('root'));