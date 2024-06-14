
function attachEventListeners() {
  const settingsLink = document.getElementById('settings-link');
  const homeLink = document.getElementById('home-link');
  const testLink= document.getElementById('test-link');
  const themeSource = document.getElementById('theme-source');
  const toggleDarkMode = document.getElementById('toggle-dark-mode');
  const toggleSystemMode= document.getElementById('reset-to-system');



  // const clickType = "click";
  const clickType = "mousedown";

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

  if (settingsLink) {
    settingsLink.addEventListener(clickType, async () => {
      await window.htmlSource.settings();
    });
  }

  if (testLink) {
    testLink.addEventListener(clickType, async () => {
     await window.htmlSource.test();
    });
  }
}

document.addEventListener('DOMContentLoaded', attachEventListeners);