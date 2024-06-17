import React, { useState } from 'react';
import {createRoot} from 'react-dom/client'
import Home from './pages/Home';
import Settings from './pages/Settings';
import Buttons from './pages/Buttons';
import Spinner from './pages/Spinner';
import Particles from './pages/Particles';
import Yoyo from './pages/Yoyo';
import Switches from './pages/Switches'


const App = () => {

    const [page, setPage] = useState('Switches');
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
        case 'Yoyo':
          CurrentPage = Yoyo;
        break;
        case 'Switches':
          CurrentPage = Switches;
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
  const yoyoPageButton= document.getElementById('yoyopageButton');
  const switchesPageButton= document.getElementById('switchespageButton');

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

  if (yoyoPageButton) {
    yoyoPageButton.addEventListener(clickType, () =>  window.loadPage('Yoyo'));
  }

  if (switchesPageButton) {
    switchesPageButton.addEventListener(clickType, () =>  window.loadPage('Switches'));
  }

}
document.addEventListener('DOMContentLoaded', attachEventListeners)

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App/>)
