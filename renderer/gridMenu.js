const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const {
    ipcRenderer,
} = require('electron');

document.getElementById('newGrid').addEventListener('click', () => {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  win.on('close', () => {
    win = null;
  });
  win.loadURL(path.join('file://', __dirname, '../view/grid/newGrid.html'));
  win.show();
});

document.getElementById('editGrid').addEventListener('click', () => {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  win.on('close', () => {
    win = null;
  });
  win.loadURL(path.join('file://', __dirname, '../view/grid/editGrid.html'));
  win.show();
});

document.getElementById('delGrid').addEventListener('click', () => {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  win.on('close', () => {
    win = null;
  });
  win.loadURL(path.join('file://', __dirname, '../view/grid/delGrid.html'));
  win.show();
});

document.getElementById('searchGrid').addEventListener('click', () => {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  win.on('close', () => {
    win = null;
  });
  win.loadURL(path.join('file://', __dirname, '../view/grid/searchGrid.html'));
  win.show();
});