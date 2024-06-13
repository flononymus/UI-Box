function attachEventListeners() {
  const settingsLink = document.getElementById('settings-link');
  const homeLink = document.getElementById('home-link');
  const themeSource = document.getElementById('theme-source');
  const toggleDarkMode = document.getElementById('toggle-dark-mode');
  const toggleSystemMode= document.getElementById('reset-to-system');

  if (settingsLink) {
    settingsLink.addEventListener('click', async () => {
      console.log('should go to settings');
      await window.htmlSource.settings();
    });
  }

  if (themeSource) {
    console.log('themeSource should be available')
    toggleDarkMode.addEventListener('click', async () => {
      const isDarkMode = await window.darkMode.toggle()
      themeSource.innerHTML = isDarkMode ? 'Dark' : 'Light'
    })
    
    toggleSystemMode.addEventListener('click', async () => {
      await window.darkMode.system()
      themeSource.innerHTML = 'System'
    })

  }

  if (homeLink) {
    homeLink.addEventListener('click', async () => {
      console.log('should go to home');
      await window.htmlSource.home();
    });
  }
}

document.addEventListener('DOMContentLoaded', attachEventListeners);