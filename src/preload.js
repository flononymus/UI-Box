const { contextBridge, ipcRenderer } = require('electron/renderer')

// contextBridge.exposeInMainWorld('electron', {
  //   ipcRenderer: ipcRenderer
  // });
  
//   const navbar = require('/components/navbar.js');
// contextBridge.exposeInMainWorld('api', {
//   getNavbar: navbar
// });

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system')
})

contextBridge.exposeInMainWorld('htmlSource', {
  home: () => ipcRenderer.invoke('htmlSource:home'),
  settings: () => ipcRenderer.invoke('htmlSource:settings')
})