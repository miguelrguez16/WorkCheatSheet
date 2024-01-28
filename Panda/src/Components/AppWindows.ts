import { BrowserWindow } from "electron";
import path from "path";

export const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    darkTheme: true,
    closable: true,
    resizable: true,
    skipTaskbar: true,
    titleBarStyle: "hidden",
    titleBarOverlay: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.on("close", (e: CloseEvent) => {
    e.preventDefault();
    mainWindow.hide();
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
  return mainWindow;
};
