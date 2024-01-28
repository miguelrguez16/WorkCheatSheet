import { app, BrowserWindow, Menu, nativeImage, Tray } from "electron";
import path from "path";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
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

let window: BrowserWindow = null;

app.on("ready", () => {
  window = createWindow();
});

app.whenReady().then(() => {
  const icon = nativeImage.createFromPath(
    "C:\\Users\\migue\\Panda\\src\\assets\\printer.ico"
  );
  const tray = new Tray(icon);
  const contextMenu = Menu.buildFromTemplate([
    { label: "Show", type: "normal", click: () => window.show() },
    { label: "Item3", type: "separator" },
    { label: "Close", type: "normal", click: () => window.hide() },
  ]);
  tray.setToolTip("Is running.");
  tray.setContextMenu(contextMenu);
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
