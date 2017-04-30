const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const {
  ipcRenderer,
} = require('electron');
const Datastore = require('nedb');
const db = new Datastore({
  filename: '/db/score1',
  autoload: true
});

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

$(document).ready(function () {
  // 指定图表的配置项和数据
  option = {
    title: {
      text: '年度外协评价表'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['航亚', '泽川', '航跃', '跃峰', '振邦']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
        name: '航亚',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '泽川',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '航跃',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '跃峰',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '振邦',
        type: 'line',
        stack: '总量',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});

document.getElementById('newGrid').addEventListener('click', () => {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  win.on('close', () => {
    db.findOne({
      month: '8'
    }, function (err, arg) {
      myChart.setOption({
        series: [{
            name: '航亚',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210, arg.A]
          },
          {
            name: '泽川',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310, arg.B]
          },
          {
            name: '航跃',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410, arg.C]
          },
          {
            name: '跃峰',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320, arg.D]
          },
          {
            name: '振邦',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320, arg.E]
          }
        ]
      });
      win = null;
    });
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