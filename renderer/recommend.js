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
    myChart.setOption(option);

});


document.getElementById('submit').addEventListener('click', () => {
    var result1 = $("#first_jishu").val();
    var result2 = $("#second_jishu").val();
    var result3 = $("#thrid_jishu").val();
    var result4 = $("#four_jishu").val();
    if (result1 == "" || result2 == "" || result3 == "" || result4 == "") {
        var $toastContent = $('<span>你没有输入数据</span>');
           Materialize.toast($toastContent, 5000);
    } else {
        myChart.setOption({
            series: [{
                data: [{
                    value: result1,
                    name: '技术1'
                },
                {
                    value: result2,
                    name: '技术2'
                },
                {
                    value: result3,
                    name: '技术3'
                },
                {
                    value: result4,
                    name: '技术4'
                }
                ]
            }]
        });
        var string= new Array("航亚","振邦","跃峰","泽川");
        var  index= Math.floor(Math.random()*4);
        $("#first_jishu").val("") ;
        $("#second_jishu").val("") ;
        $("#thrid_jishu").val("") ;
        $("#four_jishu").val("") ;
        $("#tuijian").html("我们向你推荐"+'<h3>'+string[index]+'</h3>') ;
       
     
    };

});
