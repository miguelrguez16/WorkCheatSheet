import { app, BrowserWindow } from "electron";
import { appTray } from "./Components/AppTray";
import { createWindow } from "./Components/AppWindows";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

// const createTouchBar = () => {
//   const touch = new TouchBar();
//   return touch;
// };

const quitClose = () => app.quit();

app.on("ready", () => {
  const window = createWindow();
  appTray(window, quitClose);
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
