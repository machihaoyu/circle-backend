
window.onload =function () {
  // 第一次请求  --雷达图数据
  queryData(true);

  MyFirst();
  MySecond();
  MyThird();
  MyFourth();
  MyFifth();
  MySixth();
  MyAnimate();

}

// $(document).ready(function () {
//   MyFirst();
//   MySecond();
//   MyThird();
//   // MyFourth();
//   MyFifth();
//   MySixth();
//   MyAnimate();
//
//
// });

// function getChart() {
//     //   模块一-----玫瑰图1
//     var rose = echarts.init(document.getElementById('rose'));
//     var option1 = {
//         title: {
//             text: 'Customized Pie',
//             left: 'left',
//             top: 25,
//             textStyle: {
//                 color: '#FFF'
//             }
//         },
//         tooltip : {
//             trigger: 'item',
//             formatter: "{a} <br/>{b} : {c} ({d}%)"
//         },
//         visualMap: {
//             show: false,
//             min: 80,
//             max: 600,
//             inRange: {
//                 colorLightness: [0, 1]
//             }
//         },
//         series : [
//             {
//                 name:'访问来源',
//                 type:'pie',
//                 radius : '55%',
//                 center: ['50%', '50%'],
//                 data:[
//                     {value:335, name:'直接访问'},
//                     {value:310, name:'邮件营销'},
//                     {value:274, name:'联盟广告'},
//                     {value:235, name:'视频广告'},
//                     {value:400, name:'搜索引擎'}
//                 ].sort(function (a, b) { return a.value - b.value; }),
//                 roseType: 'radius',
//                 label: {
//                     normal: {
//                         textStyle: {
//                             color: 'rgba(255, 255, 255, 1)'
//                         }
//                     }
//                 },
//                 labelLine: {
//                     normal: {
//                         lineStyle: {
//                             color: 'rgba(255, 255, 255, 0.3)'
//                         },
//                         smooth: 0.2,
//                         length: 10,
//                         length2: 20
//                     }
//                 },
//                 animationType: 'scale',
//                 animationEasing: 'elasticOut',
//                 animationDelay: function (idx) {
//                     return Math.random() * 200;
//                 }
//             }
//         ]
//         };
//     rose.setOption(option1);
//
//     // 模块2-------雷达图
//     var radar = echarts.init(document.getElementById('radar'));
//     var radarOption = {
//         title : {
//             text: '预算 vs 开销',
//             // subtext: '纯属虚构'
//           textStyle: {
//             color: '#FFF'
//           }
//         },
//         tooltip : {
//             trigger: 'axis'
//         },
//         textStyle: {
//           color: '#FFF'
//         },
//         color:['#f25e52','#ffcc3f'],
//         legend: {
//             orient : 'vertical',
//             x : 'right',
//             y : 'bottom',
//             data:['预算分配','实际开销'],
//             textStyle: {
//                color: '#FFF'
//             }
//         },
//         toolbox: {
//             show : true
//         },
//         polar : [
//            {
//                indicator : [
//                    { text: '销售', max: 6000},
//                    { text: '管理', max: 16000},
//                    { text: '信息技术', max: 30000},
//                    { text: '客服', max: 38000},
//                    { text: '研发', max: 52000},
//                    { text: '市场', max: 25000}
//                 ],
//            }
//         ],
//         calculable : true,
//         series : [
//             {
//                 name: '预算 vs 开销',
//                 type: 'radar',
//                 data : [
//                     {
//                         value : [4300, 10000, 28000, 35000, 50000, 19000],
//                         name : '预算分配',
//                         itemStyle: {
//                             normal: {
//                               lineStyle: {
//                                 color:"red" // 图表中各个图区域的边框线颜色
//                               }
//                             }
//                         },
//                     },
//                      {
//                         value : [5000, 14000, 28000, 31000, 42000, 21000],
//                         name : '实际开销',
//                         itemStyle: {
//                            normal: {
//                              lineStyle: {
//                                color:"yellow" // 图表中各个图区域的边框线颜色
//                              }
//                            }
//                         },
//                     }
//                 ]
//             }
//         ]
//             };
//     radar.setOption(radarOption);
//
//     // 模块3 ------极坐标系下的堆叠柱状图
//     var polarp = echarts.init(document.getElementById('polarp'));
//     var  coordinates = {
//       title : {
//         text: '对比图',
//         textStyle: {
//           color: '#FFF'
//         }
//       },
//         textStyle: {
//           color: '#FFF'
//         },
//         angleAxis: {
//           type: 'category',
//           data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
//           z: 10
//         },
//         radiusAxis: {
//         },
//         polar: {
//         },
//         series: [
//           {
//             type: 'bar',
//             data: [1, 2, 3, 4, 3, 5, 1],
//             coordinateSystem: 'polar',
//             name: 'A',
//             stack: 'a',
//             color:["#f25e52"]
//           }, {
//             type: 'bar',
//             data: [2, 4, 6, 1, 3, 2, 1],
//             coordinateSystem: 'polar',
//             name: 'B',
//             stack: 'a',
//             color:["#00e2e3"]
//           }, {
//             type: 'bar',
//             data: [1, 2, 3, 4, 1, 2, 5],
//             coordinateSystem: 'polar',
//             name: 'C',
//             stack: 'a',
//             color:["#ffcc3f"]
//           }
//         ],
//         legend: {
//           show: true,
//           x : 'right',
//           y : 'bottom',
//           data: ['A', 'B', 'C'],
//           textStyle: {
//             color: '#FFF'
//           }
//         }
//       };
//       polarp.setOption(coordinates);
//     // 模块4----  地图+ 设计
//
//     //  模块5-----柱线混合
//     var column = echarts.init(document.getElementById('main'));
//     var  line = {
//       tooltip : {
//         trigger: 'axis'
//       },
//       toolbox: {
//         show : true,
//         feature : {
//           // mark : {show: true},
//         }
//       },
//       calculable : true,
//       textStyle: {
//         color: '#FFF'
//       },
//       color:['#f25e52','#00e2e3'],
//       legend: {
//         x : 'right',
//         y : 'top',
//         data:['降水量','平均温度'],
//         textStyle: {
//           color: '#FFF'
//         }
//       },
//       xAxis : [
//         {
//           type : 'category',
//           data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
//         }
//       ],
//       yAxis : [
//         {
//           type : 'value',
//           name : '水量',
//           axisLabel : {
//             formatter: '{value} ml'
//           }
//         },
//         {
//           type : 'value',
//           name : '温度',
//           axisLabel : {
//             formatter: '{value} °C'
//           }
//         }
//       ],
//       series : [
//         {
//           name:'降水量',
//           type:'bar',
//           data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
//         },
//         {
//           name:'平均温度',
//           type:'line',
//           yAxisIndex: 1,
//           data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
//         }
//       ]
//       };
//     column.setOption(line);
//
//     // 模块6 ---纵向轮播1
//
//     // 模块7 ---纵向轮播2
//
//     // 模块8 ---纵向轮播3
//
//     // 模块9 ---纵向轮播4
//
//
//
//
//
//
//
//
//
//
//
//
// }

//  数字滚动
function MyAnimate() {
  // JavaScript Document
  $.fn.countTo = function (options) {
    options = options || {};

    return $(this).each(function () {
      // set options for current element
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from:            $(this).data('from'),
        to:              $(this).data('to'),
        speed:           $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals:        $(this).data('decimals')
      }, options);
      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};

      $self.data('countTo', data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof(settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;

          if (typeof(settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };
  $.fn.countTo.defaults = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
  }
  $('.countSpan').each(count)
}
//  第一部分
function MyFirst() {
  $.ajax({
      url:'http://192.168.1.124:1480/DappOperateCityD/v1/historyChannel',
      type:"GET",
      crossDomain:true,
      headers:{
        "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
      },
      success:function (data) {
        myContrast(data.data);
      },
      dataType:"json"
    }
  )
}
function myContrast(data) {
  // console.log(data,'==========');
  //   模块一-----
  var rose = echarts.init(document.getElementById('rose'));
  var option1 = {
    title : {
      text: '放款对比',
      top:20,
      textStyle: {
        fontSize:18,
        color: '#FFF'
      }
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient : 'vertical',
      x : 'right',
      y:'top',
      textStyle: {
        fontSize:12,
        color: '#FFF'
      },
      data:[data[0].feechannelName,data[1].feechannelName,data[2].feechannelName,data[3].feechannelName,data[4].feechannelName,]
    },
    toolbox: {
      show : true
    },
    calculable : true,
    series : [
      {
        name:'放款对比',
        type:'pie',
        radius : ['50%', '70%'],
        center: ['50%','45%'],
        color:['#f25e52','#ff8714','#ffcc3f','#00e2e3','#6495ED'],
        itemStyle : {
          normal : {
            label : {
              show : false
            },
            labelLine : {
              show : false
            }
          },
          emphasis : {
            label : {
              show : true,
              position : 'center',
              textStyle : {
                fontSize : '15',
                fontWeight : 'bold'
              }
            }
          }
        },
        data:[
          {value:data[0].giveMoney, name:data[0].feechannelName},
          {value:data[1].giveMoney, name:data[1].feechannelName},
          {value:data[2].giveMoney, name:data[2].feechannelName},
          {value:data[3].giveMoney, name:data[3].feechannelName},
          {value:data[4].giveMoney, name:data[4].feechannelName}
        ]
      }
    ]
  };

  // var option1 = {
  //   title: {
  //     text: '资金渠道放款对比',
  //     left: 'left',
  //     top: 25,
  //     textStyle: {
  //       color: '#fff'
  //     }
  //   },
  //   tooltip : {
  //     trigger: 'item',
  //     formatter: "{a} <br/>{b} : {c} ({d}%)"
  //   },
  //   visualMap: {
  //     show: false,
  //     min: 80,
  //     max: 600,
  //     inRange: {
  //       colorLightness: [0, 1]
  //     }
  //   },
  //   series : [
  //     {
  //       name:'资金对比',
  //       type:'pie',
  //       radius : '55%',
  //       center: ['50%', '50%'],
  //       color:['#f25e52','#ff8714','#ffcc3f','#00e2e3'],
  //       data:[
  //         {value:data[0].giveMoney, name:data[0].feechannelName},
  //         {value:data[1].giveMoney, name:data[1].feechannelName},
  //         {value:data[2].giveMoney, name:data[2].feechannelName},
  //         {value:data[3].giveMoney, name:data[3].feechannelName}
  //         // {value:data[4].giveMoney, name:data[4].feechannelName},
  //
  //         // {value:400, name:'搜索引擎'}
  //       ].sort(function (a, b) { return a.value - b.value; }),
  //       roseType: 'radius',
  //       label: {
  //         normal: {
  //           textStyle: {
  //             color: 'rgba(255, 255, 255, 1)'
  //           }
  //         }
  //       },
  //       labelLine: {
  //         normal: {
  //           lineStyle: {
  //             color: 'rgba(255, 255, 255, 0.3)'
  //           },
  //           smooth: 0.2,
  //           length: 10,
  //           length2: 20
  //         }
  //       },
  //       animationType: 'scale',
  //       animationEasing: 'elasticOut',
  //       animationDelay: function (idx) {
  //         return Math.random() * 200;
  //       }
  //     }
  //   ]
  // };
  rose.setOption(option1);
}


function MySecond() {
  var timer2  =setInterval(queryData,18000)
}
// 展示二 雷达图 --数据
function queryData(isFirst) {
  $.ajax({
      // url:'http://192.168.3.91:8030/DappOperateCityD/v1/selectOne',
      url:'http://192.168.1.124:1480/DappOperateCityD/v1/selectOne',
      type:"POST",
      crossDomain:true,
      headers:{
        "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
      },
      // url:'http://192.168.1.124:1030/fjs/paris-backend/api/v1/hotSpot/backend/list',
      success:function (data) {
        var  lists = data.data;
        if(isFirst){
          myRadar(lists[0]);
          lists.splice(0,1);
          leiDa(lists);
        }else{
          // console.log(lists,'123344');
          leiDa(lists);
        }
      },
      dataType:"json"
    }
  )
}
function myRadar(data) {
  //------雷达图
  var radar = echarts.init(document.getElementById('radar'));
  var radarOption = {
    title : {
      text: data.city,
      // subtext: '纯属虚构'
      textStyle: {
        fontSize:18,
        color: '#FFF'
      }
    },
    tooltip : {
      trigger: 'axis'
    },
    textStyle: {
      fontSize:12,
      color: '#FFF'
    },
    color:['#00e2e3','#ff8714'],
    legend: {
      // orient : 'vertical',
      x : 'right',
      y : 'bottom',
      data:['历史累计'],
      // data:['历史累计','年累计'],
      textStyle: {
        fontSize:12,
        color: '#FFF'
      },
    },
    toolbox: {
      show : true
    },
    polar : [
      {
        indicator : [
          // { text: '注册客户数'},
          // { text: '客户有房'},
          // { text: '资金渠道开拓数'},
          // { text: '协议放款额'},
          // { text: '协议佣金额'},
          { text: '注册客户数',max:230000},
          { text: '客户有房', max:59348},
          { text: '资金渠道开拓数',max:4887.3},
          { text: '协议放款额',max:4361854.222},
          { text: '协议佣金额',max:203650.7},
        ],
        center : ['49%','50%'],
        splitArea : {
          show : true,
          areaStyle : {
            color: "rgba(255,255,255,0.3)"  // 图表背景网格的颜色
          }
        },
        splitLine : {
          show : true,
          lineStyle : {
            width : 1,
            color : 'rgba(0,0,0,0.8)' // 图表背景网格线的颜色
          }
        }
      }
    ],
    calculable : true,
    series : [
      {
        name: "",
        type: 'radar',
        data : [
          {
            // value : [4300, 10000, 28000, 35000, 50000, 19000],
            value : [data.totalRegisterNum, data.totalHouseNum,data.totalProductNum, data.totalPlanMoney, data.totalServiceCommission],
            name : '历史累计',
            itemStyle: {
              normal: {
                lineStyle: {
                  color:"red" // 图表中各个图区域的边框线颜色
                }
              }
            },
          },
          // {
          //   // value : [5000, 14000, 28000, 31000, 42000, 21000],
          //   value : [data.totalRegisterNum, data.totalPlanMoney, data.totalProductNum, data.totalHouseNum , data.totalServiceCommission],
          //   name : '年累计',
          //   itemStyle: {
          //     normal: {
          //       lineStyle: {
          //         color:"yellow" // 图表中各个图区域的边框线颜色
          //       }
          //     }
          //   },
          // }
        ]
      }
    ]
  };
  radar.setOption(radarOption);

}
function leiDa(data) {
  var list = 0;
  var timer1 = setInterval(
    function () {
      if(list == data.length){
        clearInterval(timer1);
        return;
      }
      myRadar(data[list]);
      list++;
    },3000
  )


}


function MyThird() {
  // 模块3 ------极坐标系下的堆叠柱状图
  var polarp = echarts.init(document.getElementById('polarp'));
  var  coordinates = {
    title : {
      text: '对比图',
      textStyle: {
        fontSize:18,
        color: '#FFF'
      }
    },
    textStyle: {
      fontSize:12,
      color: '#FFF'
    },
    angleAxis: [
      {
        axisLabel:{                     //坐标轴刻度标签的相关设置
          show:true,                  //是否显示
          interval:"0",            //坐标轴刻度标签的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
          inside:false,               //刻度标签是否朝内，默认朝外
          rotate:0,     //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。旋转的角度从 -90 度到 90 度
          margin:8,                   //刻度标签与轴线之间的距离
          showMinLabel:null,          //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）
          showMaxLabel:null,          //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
          textStyle: {
            fontSize:16,
            color: '#FFF'
          }
        },
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        z: 10
      }
    ],
    radiusAxis: {
    },
    polar: {
    },
    series: [
      {
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a',
        color:["#ff8714"]
      }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a',
        color:["#f25e52"]
      }, {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a',
        color:["#ffcc3f"]
      }
    ],
    legend: {
      show: true,
      x : 'right',
      y : 'bottom',
      data: ['A', 'B', 'C'],
      textStyle: {
        color: '#FFF'
      }
    }
  };
  polarp.setOption(coordinates);
  // 模块4----  地图+ 设计
}


function MyFourth() {
  //  北京-----
  var  beiNum0 = 123589;
  var  beiNum1 = 959588;
  $('.beiSpan')[0].setAttribute ( 'data-to', beiNum0) ;
  $('.beiSpan')[1].setAttribute ( 'data-to', beiNum1) ;

  //  上海-----
  var  shangNum0 = 333333333;
  var  shangNum1 = 44444444;
  $('.shangSpan')[0].setAttribute ( 'data-to', shangNum0) ;
  $('.shangSpan')[1].setAttribute ( 'data-to', shangNum1) ;

  //  广州-----
  var  guangNum0 = 543211111;
  var  guangNum1 = 6312233544;
  $('.guangSpan')[0].setAttribute ( 'data-to', guangNum0) ;
  $('.guangSpan')[1].setAttribute ( 'data-to', guangNum1) ;


  //  深圳-----
  var  shenNum0 = 754221;
  var  shenNum1 = 87562523;
  $('.shenSpan')[0].setAttribute ( 'data-to', shenNum0) ;
  $('.shenSpan')[1].setAttribute ( 'data-to', shenNum1) ;

//  杭州-----
  var  hangNum0 = 999991;
  var  hangNum1 = 100002111;
  $('.hangSpan')[0].setAttribute ( 'data-to', hangNum0) ;
  $('.hangSpan')[1].setAttribute ( 'data-to', hangNum1) ;

 //  郑州-----
  var  zhengNum0 = 1100325;
  var  zhengNum1= 1255888;
  $('.zhengSpan')[0].setAttribute ( 'data-to', zhengNum0) ;
  $('.zhengSpan')[1].setAttribute ( 'data-to', zhengNum1) ;


}


function MyFifth() {
  //  模块5-----柱线混合
  var column = echarts.init(document.getElementById('main'));
  var  line = {
    tooltip : {
      trigger: 'axis',
      textStyle: {
        color: '#FFF'
      }
    },
    toolbox: {
      show : true,
      feature : {
        // mark : {show: true},
      }
    },
    calculable : true,
    textStyle: {
      fontSize:12,
      color: '#FFF'
    },
    color:['#ff8714','#00e2e3'],
    legend: {
      x : 'center',
      y : 'top',
      data:['降水量','平均温度'],
      textStyle: {
        fontSize:16,
        color: '#FFF'
      }
    },
    xAxis : [
      {
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize:16
          }
        },
        splitLine:{show: false},//去除网格线
        type : 'category',
        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
      },
    ],
    yAxis : [
      {
        type : 'value',
        name : '水量',
        axisLabel : {
          formatter: '{value} ml',
          fontSize:16
        }
      },
      {
        type : 'value',
        name : '温度',
        axisLabel : {
          formatter: '{value} °C',
          fontSize:16
        }
      }
    ],
    series : [
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
  column.setOption(line);
}


function MySixth() {
  // move();
  Sixed();
  Seventh();
  Eighth();
  Ninth();

}

//  第六部分 --滚动--
function Sixed() {
  var ul1 = document.getElementById("content6ul1");
  var ul2 = document.getElementById("content6ul2");
  var box = document.getElementById("content6");
  // var scrTop = box.scrollHeight;
  // box.style.height= scrTop+"px"
  // console.log(scrTop,box.style.height);
  roll(ul1,ul2,box,50);
}
function Seventh() {
  var ul1 = document.getElementById("content7ul1");
  var ul2 = document.getElementById("content7ul2");
  var box = document.getElementById("content7");
  roll(ul1,ul2,box,50);
}
function Eighth() {
  var ul1 = document.getElementById("content8ul1");
  var ul2 = document.getElementById("content8ul2");
  var box = document.getElementById("content8");
  roll(ul1,ul2,box,50);
}
function Ninth() {
  var ul1 = document.getElementById("content9ul1");
  var ul2 = document.getElementById("content9ul2");
  var box = document.getElementById("content9");
  roll(ul1,ul2,box,50);
}

//  滚动-ALl   6,7,8,9
function roll(ul1,ul2,box,t) {
  ul2.innerHTML = ul1.innerHTML;
  box.scrollTop = 0;
  var timer = setInterval(function () {
    rollStart(box,ul1);
  }, t);
  // box.onmouseover = function () {
  //   clearInterval(timer)
  // }
  // box.onmouseout = function () {
  //   timer = setInterval(function () {
  //     rollStart(box,ul1);
  //   }, t);
  // }
}
function rollStart(box,ul1) {
  // var box = document.getElementById("list6")
  if (box.scrollTop >= ul1.scrollHeight) {
    box.scrollTop = 0;
  } else {
    box.scrollTop++;
  }
}

