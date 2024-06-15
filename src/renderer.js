import React, { useState } from 'react';
import {createRoot} from 'react-dom/client'
import Home from './pages/Home';
import Settings from './pages/Settings';
import Buttons from './pages/Buttons';
import Spinner from './pages/Spinner';
import Particles from './pages/Particles';


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
        case 'Buttons':
            CurrentPage = Buttons;
            break;
        case 'Spinner':
          CurrentPage = Spinner;
        break;
        case 'Particles':
          CurrentPage = Particles;
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
  const buttonsPageButton= document.getElementById('buttonspageButton');
  const spinnerPageButton= document.getElementById('spinnerpageButton');
  const particlesPageButton= document.getElementById('particlespageButton');

  // const testButton = document.getElementById('buttonTest');

  if (homeButton) {
    homeButton.addEventListener(clickType, () => window.loadPage('Home'));
  }

  if (settingsButton) {
    settingsButton.addEventListener(clickType,() => window.loadPage('Settings'));
  }

  if (buttonsPageButton) {
    buttonsPageButton.addEventListener(clickType, () =>  window.loadPage('Buttons'));
  }

  if (spinnerPageButton) {
    spinnerPageButton.addEventListener(clickType, () =>  window.loadPage('Spinner'));
  }

  if (particlesPageButton) {
    particlesPageButton.addEventListener(clickType, () =>  window.loadPage('Particles'));
  }

}
document.addEventListener('DOMContentLoaded', attachEventListeners)

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App/>)
