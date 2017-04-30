// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const {
    ipcRenderer,
} = require('electron');

document.getElementById('introduction').addEventListener('click', () => {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  win.on('close', () => {
    win = null;
  });
  win.loadURL(path.join('file://', __dirname, '../view/introduction.html'));
  win.show();
});

document.getElementById('recommend').addEventListener('click', () => {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  win.on('close', () => {
    win = null;
  });
  win.loadURL(path.join('file://', __dirname, '../view/recommend.html'));
  win.show();
});

document.getElementById('grid').addEventListener('click', () => {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  win.on('close', () => {
    win = null;
  });
  win.loadURL(path.join('file://', __dirname, '../view/gridMenu.html'));
  win.show();
});

document.getElementById('count').addEventListener('click', () => {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  win.on('close', () => {
    win = null;
  });
  win.loadURL(path.join('file://', __dirname, '../view/count.html'));
  win.show();
});
