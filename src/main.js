const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')
const path = require('node:path')

let htmlSource = 'src/app/home.html'
// let htmlSource = 'src/app/settings.html'

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // mainWindow.loadFile('src/app/home.html')
  mainWindow.loadFile(htmlSource)

  // mainWindow.webContents.openDevTools()

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })
  
  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })

  ipcMain.handle('htmlSource:home', () => {
    htmlSource = 'src/app/home.html'
    mainWindow.loadFile(htmlSource)
  })

  ipcMain.handle('htmlSource:settings', () => {
    htmlSource = 'src/app/settings.html'
    mainWindow.loadFile(htmlSource)
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
    app.quit()
})