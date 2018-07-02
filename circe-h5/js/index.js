
$(document).ready(function () {
    getChart();
});

function getChart() { 
    //   模块一-----玫瑰图1
    var rose1 = echarts.init(document.getElementById('rose1'));
    var option1 = {
        backgroundColor: '#2c343c',
        title: {
            text: 'Customized Pie',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:274, name:'联盟广告'},
                    {value:235, name:'视频广告'},
                    {value:400, name:'搜索引擎'}
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
        };
    rose1.setOption(option1);

    // 模块2-------雷达图
    var radar = echarts.init(document.getElementById('radar'));
    var radarOption = {
        title : {
            text: '预算 vs 开销（Budget vs spending）',
            subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            y : 'bottom',
            data:['预算分配（Allocated Budget）','实际开销（Actual Spending）']
        },
        toolbox: {
            show : true, 
        },
        polar : [
           {
               indicator : [
                   { text: '销售（sales）', max: 6000},
                   { text: '管理（Administration）', max: 16000},
                   { text: '信息技术（Information Techology）', max: 30000},
                   { text: '客服（Customer Support）', max: 38000},
                   { text: '研发（Development）', max: 52000},
                   { text: '市场（Marketing）', max: 25000}
                ]
            }
        ],
        calculable : true,
        series : [
            {
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000, 19000],
                        name : '预算分配（Allocated Budget）'
                    },
                     {
                        value : [5000, 14000, 28000, 31000, 42000, 21000],
                        name : '实际开销（Actual Spending）'
                    }
                ]
            }
        ]
            };
    radar.setOption(radarOption);

    // 模块3 ------玫瑰图3 
    // var rose2 = echarts.init(document.getElementById('rose2'));
    // var option2 = {
    //         angleAxis: {
    //             type: 'category',
    //             data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    //             z: 10
    //         },
    //         radiusAxis: {
    //         },
    //         polar: {
    //         },
    //         series: [{
    //             type: 'bar',
    //             data: [1, 2, 3, 4, 3, 5, 1],
    //             coordinateSystem: 'polar',
    //             name: 'A',
    //             stack: 'a'
    //         }, {
    //             type: 'bar',
    //             data: [2, 4, 6, 1, 3, 2, 1],
    //             coordinateSystem: 'polar',
    //             name: 'B',
    //             stack: 'a'
    //         }, {
    //             type: 'bar',
    //             data: [1, 2, 3, 4, 1, 2, 5],
    //             coordinateSystem: 'polar',
    //             name: 'C',
    //             stack: 'a'
    //         }],
    //         legend: {
    //             show: true,
    //             data: ['A', 'B', 'C']
    //         }
    //     };

    // rose2.setOption(option2);

    // 模块4----  地图+ 设计

    //  模块5-----柱线混合
    var myChart = echarts.init(document.getElementById('main'));
    var  option = {
            tooltip : {
                trigger: 'axis'
            },
            calculable : true,
            legend: {
                data:['蒸发量','降水量','平均温度']
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '水量',
                    axisLabel : {
                        formatter: '{value} ml'
                    }
                },
                {
                    type : 'value',
                    name : '温度',
                    axisLabel : {
                        formatter: '{value} °C'
                    }
                }
            ],
            series : [

                {
                    name:'蒸发量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name:'降水量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name:'平均温度',
                    type:'line',
                    yAxisIndex: 1,
                    data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
            };
    myChart.setOption(option);

    // 模块6 ---纵向轮播1

    // 模块7 ---纵向轮播2

    // 模块8 ---纵向轮播3

    // 模块9 ---纵向轮播4












}

