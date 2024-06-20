const { contextBridge, ipcRenderer} = require('electron/renderer')
const { screen } = require('electron')

contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: ipcRenderer,
    screen: {
      getCursorScreenPoint: () => screen.getCursorScreenPoint(),
      getPrimaryDisplay: () => screen.getPrimaryDisplay(),
      getAllDisplays: () => screen.getAllDisplays()
  }
});

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system'),
  getThemeSource: () => ipcRenderer.invoke('dark-mode:get-theme-source')
})