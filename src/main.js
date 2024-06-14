const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')
const path = require('node:path')

// let htmlSource = 'src/index.html'
let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true 
    }
  })

  // mainWindow.loadFile(htmlSource)
  // mainWindow.loadFile('src/index.html')
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.webContents.openDevTools()

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

  ipcMain.handle('htmlSource:test', () => {
    htmlSource = 'src/app/test.html'
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