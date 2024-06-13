const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system')
})

contextBridge.exposeInMainWorld('htmlSource', {
  home: () => ipcRenderer.invoke('htmlSource:home'),
  settings: () => ipcRenderer.invoke('htmlSource:settings')
})