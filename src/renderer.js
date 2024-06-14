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

}
document.addEventListener('DOMContentLoaded', attachEventListeners)

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App/>)
