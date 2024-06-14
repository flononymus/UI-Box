// const { ipcRenderer } = window.electron;

function attachEventListeners() {
  const settingsLink = document.getElementById('settings-link');
  const homeLink = document.getElementById('home-link');
  const themeSource = document.getElementById('theme-source');
  const toggleDarkMode = document.getElementById('toggle-dark-mode');
  const toggleSystemMode= document.getElementById('reset-to-system');

  // const navbar = require('./components/navbar.js')

  // const navbarContainer= document.getElementById('navBar-Menu');



  // const clickType = "click";
  const clickType = "mousedown";


  if (settingsLink) {
    settingsLink.addEventListener(clickType, async () => {
      await window.htmlSource.settings();
    });
  }

  if (themeSource) {
    toggleDarkMode.addEventListener(clickType, async () => {
      const isDarkMode = await window.darkMode.toggle()
      themeSource.innerHTML = isDarkMode ? 'Dark' : 'Light'
    })
    
    toggleSystemMode.addEventListener(clickType, async () => {
      await window.darkMode.system()
      themeSource.innerHTML = 'System'
    })

  }

  if (homeLink) {
    homeLink.addEventListener(clickType, async () => {
      await window.htmlSource.home();
    });
  }
}

document.addEventListener('DOMContentLoaded', attachEventListeners);

// window.addEventListener('DOMContentLoaded', () => {
//   const navbarDiv = document.getElementById('navbar');
//   if (navbarDiv) {
//       navbarDiv.appendChild(window.api.getNavbar());
//   }
// });