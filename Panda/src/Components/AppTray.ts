import { BrowserWindow, Menu, Tray, nativeImage } from "electron";

export const appTray = (window: BrowserWindow, endApp: () => void) => {
  const icon = nativeImage.createFromPath(
    "C:\\Users\\migue\\Panda\\src\\assets\\printer.ico"
  );
  const tray = new Tray(icon);
  const contextMenu = Menu.buildFromTemplate([
    { label: "Show", type: "normal", click: () => window.show() },
    { label: "Item3", type: "separator" },
    { label: "Close", type: "normal", click: () => window.hide() },
    { label: "Item", type: "separator" },
    { label: "Terminate", type: "normal", click: () => endApp },
  ]);
  tray.setToolTip("Is running.");
  tray.setContextMenu(contextMenu);
};
