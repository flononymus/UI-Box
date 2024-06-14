import React, { useState } from 'react';
import {createRoot} from 'react-dom/client'
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
    }

    window.loadPage = (page) => {
        setPage(page);
    };

    return <CurrentPage />;
};


function attachEventListeners() {

  const clickType = "mousedown";

  const homeButton= document.getElementById('homeButton');
  const settingsButton= document.getElementById('settingsButton');
  const testPageButton= document.getElementById('testpageButton');

  // const themeSource = document.getElementById('theme-source')
  // const darkModeToggle = document.getElementById('toggle-dark-mode');
  // const systemModeToggle = document.getElementById('reset-to-system');

  const testButton = document.getElementById('buttonTest');

    if (homeButton) {
      homeButton.addEventListener(clickType, () => window.loadPage('Home'));
    }

  if (settingsButton) {
    settingsButton.addEventListener(clickType,() => window.loadPage('Settings'));
  }

  if (testPageButton) {
    testPageButton.addEventListener(clickType, () =>  window.loadPage('Testpage'));
  }

  // if (testButton) {
  //   testButton.addEventListener(clickType, () => console.log('button clicked'))
  // }

  // if (darkModeToggle) {
  //   darkModeToggle.addEventListener(clickType, () => )
  // }

  // if (systemModeToggle) {
  //   systemModeToggle.addEventListener
  // }

  // if (darkModeToggle) {
    // console.log('dark mode available')
    // darkModeToggle.addEventListener('click', async () => {
    //   const isDarkMode = await window.darkMode.toggle()
    //   themeSource.innerHTML = isDarkMode ? 'Dark' : 'Light'
    //   console.log('dark mode toggle')
    // })

    // systemModeToggle.addEventListener('click', async () => {
    //   await window.darkMode.system()
    //   themeSource.innerHTML = 'System'
    //   console.log('system mode toggle')
    // })

    // systemModeToggle.addEventListener('click',() => {
    //   window.darkMode.system()
    //   themeSource.innerHTML = 'System'
    //   window.loadPage('Settings')
    //   console.log('system mode toggle')
    // })
  // }

}
document.addEventListener('DOMContentLoaded', attachEventListeners)

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App/>)
