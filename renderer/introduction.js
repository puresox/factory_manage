// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
$(document).ready(function () {
  $('.carousel').carousel();
});

$(document).ready(function () {
  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '技能分析图',
      subtext: '',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['技术1', '技术2', '技术3', '技术4']
    },
    toolbox: {
      show: true,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: true,
          type: ['pie', 'funnel']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: true,
    series: [{
      name: '面积模式',
      type: 'pie',
      radius: [30, 110],
      center: ['50%', '50%'],
      roseType: 'area',
      data: [{
          value: 10,
          name: '技术1'
        },
        {
          value: 5,
          name: '技术2'
        },
        {
          value: 15,
          name: '技术3'
        },
        {
          value: 25,
          name: '技术4'
        }
      ]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});

document.getElementById('img1').addEventListener('click', () => {
  $("#name").text("航亚");
  $("#introduction").text("航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚航亚");
  myChart.setOption({
    series: [{
      data: [{
          value: 10,
          name: '技术1'
        },
        {
          value: 5,
          name: '技术2'
        },
        {
          value: 15,
          name: '技术3'
        },
        {
          value: 25,
          name: '技术4'
        }
      ]
    }]
  });
});
document.getElementById('img2').addEventListener('click', () => {
  $("#name").text("泽川");
  $("#introduction").text("泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川泽川");
  myChart.setOption({
    series: [{
      data: [{
          value: 5,
          name: '技术1'
        },
        {
          value: 10,
          name: '技术2'
        },
        {
          value: 30,
          name: '技术3'
        },
        {
          value: 10,
          name: '技术4'
        }
      ]
    }]
  });
});
document.getElementById('img3').addEventListener('click', () => {
  $("#name").text("航跃");
  $("#introduction").text("航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃航跃");
  myChart.setOption({
    series: [{
      data: [{
          value: 5,
          name: '技术1'
        },
        {
          value: 25,
          name: '技术2'
        },
        {
          value: 15,
          name: '技术3'
        },
        {
          value: 10,
          name: '技术4'
        }
      ]
    }]
  });
});
document.getElementById('img4').addEventListener('click', () => {
  $("#name").text("跃峰");
  $("#introduction").text("跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰跃峰");
  myChart.setOption({
    series: [{
      data: [{
          value: 25,
          name: '技术1'
        },
        {
          value: 5,
          name: '技术2'
        },
        {
          value: 10,
          name: '技术3'
        },
        {
          value: 10,
          name: '技术4'
        }
      ]
    }]
  });
});
document.getElementById('img5').addEventListener('click', () => {
  $("#name").text("振邦");
  $("#introduction").text("振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦振邦");
  myChart.setOption({
    series: [{
      data: [{
          value: 1,
          name: '技术1'
        },
        {
          value: 2,
          name: '技术2'
        },
        {
          value: 3,
          name: '技术3'
        },
        {
          value: 4,
          name: '技术4'
        }
      ]
    }]
  });
});