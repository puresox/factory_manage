$(document).ready(function () {
    $('.carousel').carousel();
});

$('.carousel.carousel-slider').carousel({fullWidth: true});

document.getElementById('echarts').addEventListener('click', () => {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  win.on('close', () => {
    win = null;
  });
  win.loadURL(path.join('file://', __dirname, '../view/introduction/echarts.html'));
  win.show();
});