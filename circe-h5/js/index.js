
window.onload =function () {

  // 第一部分  -
  var  firstDataOne = [];
  var  firstDataTwo = [];
  firstAll();
  // 第二部分  --
  queryData(true);
  //  第三部分 ----
  var weekList = [];
  thirdData();
  // 第四部分  ----
  fourthData(true);
  // 第五部分  -----
  fifthData();
  //  第六部分  ------
  myLast();
  //  轮播
  // lastData();

  //  所有数据 定时刷新
  ALL();
  // MyAnimate();

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

function ALL() {
  MyFirst();
  MySecond();
  MyThird();
  MyFourth();
  MyFifth();
  MySixth();
}

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
    speed: 2000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 2,           // the number of decimal places to show
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
  //  1个小时
  var firstTimer  =setInterval(firstData1,86400000);
}

function firstAll() {
  firstData1();
  // myContrast(firstDataOne,firstDataTwo);
}

function firstData1() {
  $.ajax({
      url:'http://192.168.1.124:1480/stage2/v1/one/totalOne',
      type:"GET",
      crossDomain:true,
      headers:{
        "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
      },
      success:function (data) {
        firstDataOne = data.data;
        firstData2()
        // myContrast(firstDataTwo,firstDataOne);

      },
      dataType:"json"
    }
  )
}
function firstData2() {
  $.ajax({
      url:'http://192.168.1.124:1480/stage2/v1/one/bd',
      type:"GET",
      crossDomain:true,
      headers:{
        "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
      },
      success:function (data) {
        firstDataTwo = data.data;
        myContrast(firstDataTwo,firstDataOne,'1');
      },
      dataType:"json"
    }
  )
}
function myContrast(first,data,flag) {
  // console.log(first,data,flag,'ssssssssssss');
  var  BD = [];
  var WL =[];
  if(first!='1'){
    for(var i=0;i<first.length;i++){
      if(first[i].firstClassDesc =='BD'){
        BD.push(first[i]);
      }else {
        WL.push(first[i]);
      }
    }
  }
  //   模块一  -----
  var rose = echarts.init(document.getElementById('rose'));
  var option1 = {
    title:{
      text:'获客渠道',
      top:'10',
      textStyle:{
        fontSize:12,
        color:'#fff'
      },
    },

    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    textStyle:{
      fontSize: 6
    },
    // legend: {
    //   orient: 'vertical',
    //   x: 'right',
    //   data:[data[0].firstClassDesc,data[2].firstClassDesc,data[1].firstClassDesc,BD[0].media,BD[1].media,BD[2].media,BD[3].media,BD[0].media,WL[1].media,WL[2].media,WL[3].media],
    //   textStyle:{
    //     fontSize:4,
    //     color:'#fff'
    //   }
    // },
    series: [
      {
        name:'访问来源',
        type:'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        center : ['48%','50%'],
        label: {
          normal: {
            position: 'inner'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data:[
          //  selected:true
          {value:data[0].channelNum, name:data[0].firstClassDesc},
          {value:data[2].channelNum, name:data[2].firstClassDesc},
          // {value:data[1].channelNum, name:data[1].firstClassDesc }
        ]
      },
      {
        name:'访问来源',
        type:'pie',
        center : ['48%','50%'],
        radius: ['40%', '55%'],
       /* label: {
          normal: {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#eee',
            borderColor: '#aaa',
            borderWidth: 1,
            borderRadius: 4,
            // shadowBlur:3,
            // shadowOffsetX: 2,
            // shadowOffsetY: 2,
            // shadowColor: '#999',
            // padding: [0, 7],
            rich: {
              a: {
                color: '#999',
                lineHeight: 2,
                align: 'center'
              },
              hr: {
                borderColor: '#aaa',
                width: '100%',
                borderWidth: 0.5,
                height: 0
              },
              b: {
                fontSize: 2,
                lineHeight: 2
              },
              per: {
                color: '#eee',
                backgroundColor: '#334455',
                padding: [2, 4],
                borderRadius: 2
              }
            }
          }
        },*/
        data:[
           {value:BD[0].channelNum, name:BD[0].media},
           {value:BD[1].channelNum, name:BD[1].media},
           {value:BD[2].channelNum, name:BD[2].media},
           {value:BD[3].channelNum, name:BD[3].media},
           {value:WL[0].channelNum, name:WL[0].media},
           {value:WL[1].channelNum, name:WL[1].media},
           {value:WL[2].channelNum, name:WL[2].media},
           {value:WL[3].channelNum, name:WL[3].media}
        ]
      }
    ]
  };
  rose.setOption(option1);
}


function MySecond() {
  var timer2  =setInterval(queryData,86400000)
  // myRadar();
  queryData();
}
// 展示二   --数据
function queryData(isFirst) {
  $.ajax({
      // url:'http://192.168.3.91:8030/DappOperateCityD/v1/selectOne',
      url:'http://192.168.1.124:1480/stage2/v1/two/two',
      type:"GET",
      crossDomain:true,
      headers:{
        "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
      },
      success:function (data) {
        var  lists = data.data;
        var xinList= [];
        var diList= [];
        var qiList= [];
        for (var i=0; i<lists.length;i++){
          if(lists[i].productType =='信用'){
            xinList.push(lists[i]);
          }else if(lists[i].productType =='抵押'){
            diList.push(lists[i]);
          }else{
            qiList.push(lists[i]);
          }
        }

        myRadar(lists,xinList,diList,qiList);
      },
      dataType:"json"
    }
  )
}
function myRadar(data,xin,di,qi) {
  //------
  var radar = echarts.init(document.getElementById('radar'));
  var radarOption ={
    title: {
      text: '放款机构',
      textStyle:{
        fontSize:12,
        color:'#fff'
      },
    },
    color:['#ff8714','#00e2e3','#ffcc3f'],
    textStyle:{
      color:'#fff'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      orient: 'vertical',
      x: 'right',
      textStyle:{
        fontSize:4,
        color:'#fff'
      },
      data: ['抵押','信用']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLabel: {
        show: true,
        formatter: '{value}亿',
        interval:0,
        // rotate:40,
        textStyle: {
          color: '#fff',
          fontSize:8
        }
      },
      splitLine:{show: false},//去除网格线
    },
    yAxis: {
      type: 'category',
      data: ['小贷','银行'],
      axisLabel: {
        interval:0,
        textStyle: {
          color: '#fff',
          fontSize:8
        }
      },
    },
    series: [
      {
        name: '抵押',
        type: 'bar',
        data: [di[0].giveMoney,di[1].giveMoney,]
      },
      {
        name: '信用',
        type: 'bar',
        data: [xin[0].giveMoney,xin[1].giveMoney,]
      },
      // {
      //   name: '其他',
      //   type: 'bar',
      //   data: [qi[0].giveMoney,qi[1].giveMoney]
      // },

    ]
  };
  radar.setOption(radarOption);
}


//  展示 三  --- -
function MyThird() {
  var thirdTimer  =setInterval(thirdData,86400000);
}
function thirdData() {
  $.ajax({
    url: 'http://192.168.1.124:1480/stage2/v1/three/histogram',
    type: "GET",
    crossDomain: true,
    dataType: "json",
    headers: {
      "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
    },
    success: function (data) {
      weekList = data.data;
      week(weekList);
      // thirdData2();
    }

  })
}
function thirdData2() {
  $.ajax({
    url: 'http://192.168.1.124:1480/stage2/v1/three/cake',
    type: "GET",
    crossDomain: true,
    dataType: "json",
    headers: {
      "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
    },
    success: function (data) {
      var list2 = data.data;
      week(weekList,list2);
    }
  })
}

// function week(data,list2) {
//   //  柱形图
//   var y16 = [],y17 =[] ,y18 =[] , y16X =[] ,y16D =[],y17X =[] ,y17D =[],y18X =[] ,y18D =[] ,y18Q =[];
//   for(var i=0;i<data.length;i++){
//     if(data[i].createYear =='2016'){
//       y16.push(data[i]);
//     }else if(data[i].createYear =='2017'){
//       y17.push(data[i]);
//     }else if(data[i].createYear =='2018'){
//       y18.push(data[i]);
//     }else {
//       console.log(data[i]);
//     }
//   }
//
//   for(var j=0;j<y16.length;j++){
//     if(y16[j].productType == '信用'){
//       y16X.push(y16[j]);
//     }else {
//       y16D.push(y16[j]);
//     }
//   }
//   for(var j=0;j<y17.length;j++){
//     if(y17[j].productType == '信用'){
//       y17X.push(y17[j]);
//     }else {
//       y17D.push(y17[j]);
//     }
//   }
//   for(var j=0;j<y18.length;j++){
//     if(y18[j].productType == '信用'){
//       y18X.push(y18[j]);
//     }else if(y18[j].productType == '其他'){
//       y18Q.push(y18[j]);
//     }else {
//       y18D.push(y18[j]);
//     }
//   }
//   //   饼图 --部分
//   var L16 =[], L17 =[], L18 =[];
//   for(var i=0;i<list2.length;i++){
//     if(list2[i].createYear =='2016'){
//       L16.push(list2[i]);
//     }else if(list2[i].createYear =='2017'){
//       L17.push(list2[i]);
//     }else if(list2[i].createYear =='2018'){
//       L18.push(list2[i]);
//     }else {
//       console.log(list2[i]);
//     }
//   }
//
//   // 模块3 ------
//   var polarp = echarts.init(document.getElementById('polarp'));
//   var dataMap = {};
//   function dataFormatter(obj) {
//     var pList = ['上海','北京','广州','杭州','深圳','郑州'];
//     var temp;
//     for (var year = 2016; year <= 2018; year++) {
//       var max = 0;
//       var sum = 0;
//       temp = obj[year];
//       for (var i = 0, l = temp.length; i < l; i++) {
//         max = Math.max(max, temp[i]);
//         sum += temp[i];
//         obj[year][i] = {
//           name : pList[i],
//           value : temp[i]
//         }
//       }
//       obj[year + 'max'] = Math.floor(max / 100) * 100;
//       obj[year + 'sum'] = sum;
//     }
//     return obj;
//   }
//   // dataMap.dataGDP = dataFormatter({
//   //   //max : 60000,
//   //   2016:[y16D[0].giveMoney,y16D[1].giveMoney,y16D[2].giveMoney,y16D[3].giveMoney,y16D[4].giveMoney,y16D[5].giveMoney],
//   //   // 2017:[y17[0].giveMoney,y17[1].giveMoney,y17[2].giveMoney,y17[3].giveMoney,y17[4].giveMoney,y17[5].giveMoney],
//   //   // 2018:[y18[0].giveMoney,y18[1].giveMoney,y18[2].giveMoney,y18[3].giveMoney,y18[4].giveMoney,y18[5].giveMoney]
//   // });
//   dataMap.dataXI = dataFormatter({
//     //max : 4000,
//     2016:[y16X[0].giveMoney,y16X[1].giveMoney,y16X[2].giveMoney,y16X[3].giveMoney,y16X[4].giveMoney,y16X[5].giveMoney],
//     2017:[y17X[0].giveMoney,y17X[1].giveMoney,y17X[2].giveMoney,y17X[3].giveMoney,y17X[4].giveMoney,y17X[5].giveMoney],
//     2018:[y18X[0].giveMoney,y18X[1].giveMoney,y18X[2].giveMoney,y18X[3].giveMoney,y18X[4].giveMoney,y18X[5].giveMoney]
//   });
//   dataMap.dataDI = dataFormatter({
//     //max : 26600,
//     2016:[y16D[0].giveMoney,y16D[1].giveMoney,y16D[2].giveMoney,y16D[3].giveMoney,y16D[4].giveMoney,y16D[5].giveMoney],
//     2017:[y17D[0].giveMoney,y17D[1].giveMoney,y17D[2].giveMoney,y17D[3].giveMoney,y17D[4].giveMoney,y17D[5].giveMoney],
//     2018:[y18D[0].giveMoney,y18D[1].giveMoney,y18D[2].giveMoney,y18D[3].giveMoney,y18D[4].giveMoney,y18D[5].giveMoney]
//
//   });
//   dataMap.dataQI = dataFormatter({
//     //max : 25000,
//     2016:[],
//     2017:[],
//     2018:[y18Q[0].giveMoney,y18Q[1].giveMoney]
//   });
//   // dataMap.dataEstate = dataFormatter({
//   //   //max : 3600,
//   //   2011:[1074.93,411.46,918.02,224.91,384.76,],
//   //   2010:[1006.52,377.59,697.79,192,309.25,733.37,],
//   //   2009:[1062.47,308.73,612.4,173.31,286.65,605.27,],
//   //   2008:[844.59,227.88,513.81,166.04,273.3,500.81,182.7,],
//   //
//   //
//   // });
//   // dataMap.dataFinancial = dataFormatter({
//   //   //max : 3200,
//   //   2011:[2215.41,756.5,746.01,519.32,447.46],
//   //   2010:[1863.61,572.99,615.42,448.3,346.44],
//   //   2009:[1603.63,461.2,525.67,361.64,291.1],
//   //   2008:[1519.19,368.1,420.74,290.91,219.09],
//   //
//   // });
//
//   var  coordinates = {
//     baseOption: {
//       timeline: {
//         show:false,
//         // y: 0,
//         axisType: 'category',
//         // realtime: false,
//         // loop: false,
//         autoPlay: true,
//         // currentIndex: 2,
//         playInterval: 3000,
//         // controlStyle: {
//         //     position: 'left'
//         // },
//         data: [
//           {
//             value: '2016',
//             tooltip: {
//               formatter: function (params) {
//                 return params.name + '达到又一个高度';
//               }
//             },
//             symbol: 'diamond',
//             symbolSize: 8
//           },
//           {
//             value: '2017',
//             tooltip: {
//               formatter: function (params) {
//                 return params.name + '达到又一个高度';
//               }
//             },
//             symbol: 'diamond',
//             symbolSize: 8
//           },
//           {
//             value: '2018',
//             tooltip: {
//               formatter: function (params) {
//                 return params.name + '达到又一个高度';
//               }
//             },
//             symbol: 'diamond',
//             symbolSize: 8
//           },
//         ],
//         label: {
//           formatter : function(s) {
//             return (new Date(s)).getFullYear();
//           }
//         }
//       },
//       title: {
//         y: 'top',
//         textStyle:{
//           color:"#fff",
//           fontSize:12
//         },
//       },
//       tooltip: { },
//       color:['#ff8714','#ffcc3f'],
//       // legend: {
//       //   orient: 'vertical',
//       //   x: 'right',
//       //   data: ['信用', '抵押'],
//       //   textStyle:{
//       //     color:"#fff",
//       //     fontSize:2
//       //   },
//       // },
//       calculable : true,
//       xAxis: [
//         {
//           type:'category',
//           data:['上海','北京','广州','杭州','深圳','郑州'],
//           axisLabel: {
//             interval:0,
//             textStyle: {
//               color: '#fff',
//               fontSize:8
//             },
//             splitLine:{show: false},//去除网格线
//           },
//           // splitLine: {show: true}
//         }
//       ],
//       yAxis: [
//         {
//           type: 'value',
//           name: '放款额',
//           nameTextStyle:{
//             fontSize : 4,
//             color: '#fff'
//           },
//           axisLabel: {
//             formatter: '{value}亿',
//             textStyle: {
//               color: '#fff',
//               fontSize:8
//             }
//           },
//           splitLine:{show: false}//去除网格线
//         },
//         {
//           type: 'value',
//           name: '信用额',
//           nameTextStyle:{
//             fontSize : 4,
//             color: '#fff'
//           },
//           axisLabel: {
//             formatter: '{value}亿',
//             textStyle: {
//               color: '#fff',
//               fontSize:8
//             }
//           },
//           splitLine:{show: false}//去除网格线
//         },
//
//
//       ],
//       series: [
//         {
//           name: '信用',
//           type: 'bar',
//           label : {
//             normal : {
//               // formatter: '{b}:{c}: ({d}%)',
//               textStyle : {
//                 fontSize : 6
//               }
//             }
//           }
//         },
//         {name: '抵押',
//           type: 'line',
//           yAxisIndex: 1,
//           label : {
//             normal : {
//               // formatter: '{b}:{c}: ({d}%)',
//               textStyle : {
//                 fontSize : 6
//               }
//             }
//           },
//         },
//         {
//           name: '放款占比',
//           type: 'pie',
//           center: ['70%', '35%'],
//           radius: '28%',
//           label : {
//             normal : {
//               // formatter: '{b}:{c}: ({d}%)',
//               textStyle : {
//                 fontSize : 6
//               }
//             }
//           },
//
//           z: 100
//         }
//       ]
//     },
//     options: [
//       {
//         title : {
//           text: '2016年 放款机构对比',
//           textStyle:{
//             fontSize:12
//           },
//         },
//         series : [
//
//           {data: dataMap.dataXI['2016']},
//           {data: dataMap.dataDI['2016']},
//           {data: [
//
//             {name:L16[0].productType, value:L16[0].giveMoney },
//             {name:L16[1].productType, value:L16[1].giveMoney }
//           ]}
//         ]
//       },
//       {
//         title : {
//           text: '2017年 放款机构对比',
//           textStyle:{
//             fontSize:12
//           },
//         },
//         series : [
//           {data: dataMap.dataXI['2017']},
//           {data: dataMap.dataDI['2017']},
//           {data: [
//             {name:L17[0].productType, value:L17[0].giveMoney },
//             {name:L17[1].productType, value:L17[1].giveMoney }
//           ]}
//         ]
//       },
//       {
//         title : {
//           text: '2018年 放款机构对比',
//           textStyle:{
//             fontSize:12
//           },
//         },
//         series : [
//           {data: dataMap.dataXI['2018']},
//           {data: dataMap.dataDI['2018']},
//           // {data: [y18Q[0].giveMoney,y18Q[1].giveMoney]},
//           {data: [
//             {name:L18[0].productType, value:L18[0].giveMoney },
//             {name:L18[2].productType, value:L18[2].giveMoney }
//           ]}
//         ]
//       }
//     ]
//   };
//   polarp.setOption(coordinates);
// }

function week(data) {
  // list2
  //  柱形图
  var yShang = [],yBei =[] ,yGuang =[] , yShen =[] ,yHang =[],yZheng =[] ;
  for(var i=0;i<data.length;i++){
    if(data[i].city =='上海'){
      yShang.push(data[i]);
    }else if(data[i].city =='北京'){
      yBei.push(data[i]);
    }else if(data[i].city =='广州'){
      yGuang.push(data[i]);
    }else if(data[i].city =='深圳'){
      yShen.push(data[i]);
    }else if(data[i].city =='杭州'){
      yHang.push(data[i]);
    }else if(data[i].city =='郑州'){
      yZheng.push(data[i]);
    }else {
      console.log(data[i]);
    }
  }
 var yShangX = [],yShangD =[], yBeiX=[],yBeiD=[] , yGuangX=[],yGuangD=[], yShenX=[],yShenD=[],yHangX=[] ,yHangD=[],yZhengX=[],yZhengD=[];
  //  上海
  for(var j=0;j<yShang.length;j++){
    if(yShang[j].productType == '信用'){
      yShangX.push(yShang[j]);
    }else  if(yShang[j].productType == '抵押'){
      yShangD.push(yShang[j]);
    }else {
      // console.log('上海-其他',yShang[j])
    }

  }
   //  北京 ---
   for(var j=0;j<yBei.length;j++){
    if(yBei[j].productType == '信用'){
      yBeiX.push(yBei[j]);
    }else if(yBei[j].productType == '抵押'){
      yBeiD.push(yBei[j]);
    }else {
      // console.log('北京--其他',yShang[j])
    }
  }
 //   广州---
 for(var j=0;j<yGuang.length;j++){
    if(yGuang[j].productType == '信用'){
      yGuangX.push(yGuang[j]);
    }else {
      yGuangD.push(yGuang[j]);
    }
  }
 //   深圳---
 for(var j=0;j<yShen.length;j++){
    if(yShen[j].productType == '信用'){
      yShenX.push(yShen[j]);
    }else {
      yShenD.push(yShen[j]);
    }
  }
//   杭州---
 for(var j=0;j<yHang.length;j++){
    if(yHang[j].productType == '信用'){
      yHangX.push(yHang[j]);
    }else {
      yHangD.push(yHang[j]);
    }
  }
//   郑州---
 for(var j=0;j<yZheng.length;j++){
    if(yZheng[j].productType == '信用'){
      yZhengX.push(yZheng[j]);
    }else {
      yZhengD.push(yZheng[j]);
    }
  }

var allShangD =parseFloat(yShangD[0].giveMoney) +parseFloat(yShangD[1].giveMoney)+parseFloat(yShangD[2].giveMoney);
var allShangX = parseFloat(yShangX[0].giveMoney)+parseFloat(yShangX[0].giveMoney)+parseFloat(yShangX[0].giveMoney);

var allBeiD = parseFloat(yBeiD[0].giveMoney)+parseFloat(yBeiD[1].giveMoney)+parseFloat(yBeiD[2].giveMoney);
var allBeiX = parseFloat(yBeiX[0].giveMoney)+parseFloat(yBeiX[1].giveMoney)+parseFloat(yBeiX[2].giveMoney);

var allGuangD = parseFloat(yGuangD[0].giveMoney)+parseFloat(yGuangD[1].giveMoney)+parseFloat(yGuangD[2].giveMoney);
var allGuangX = parseFloat(yGuangX[0].giveMoney)+parseFloat(yGuangX[1].giveMoney)+parseFloat(yGuangX[2].giveMoney);

var allShenD = parseFloat(yShenD[0].giveMoney)+parseFloat(yShenD[1].giveMoney)+parseFloat(yShenD[2].giveMoney);
var allShenX = parseFloat(yShenX[0].giveMoney)+parseFloat(yShenX[1].giveMoney)+parseFloat(yShenX[2].giveMoney);

var allHangD = parseFloat(yHangD[0].giveMoney)+ parseFloat(yHangD[1].giveMoney)+ parseFloat(yHangD[2].giveMoney);
var allHangX =  parseFloat(yHangX[0].giveMoney)+ parseFloat(yHangX[1].giveMoney)+ parseFloat(yHangX[2].giveMoney);

var allZhengD = parseFloat( yZhengD[0].giveMoney)+parseFloat( yZhengD[1].giveMoney)+parseFloat( yZhengD[2].giveMoney);
var allZhengX = parseFloat( yZhengX[0].giveMoney)+parseFloat( yZhengX[1].giveMoney)+parseFloat( yZhengX[2].giveMoney);

  //   饼图 --部分
  // var L16 =[], L17 =[], L18 =[];
  // for(var i=0;i<list2.length;i++){
  //   if(list2[i].createYear =='2016'){
  //     L16.push(list2[i]);
  //   }else if(list2[i].createYear =='2017'){
  //     L17.push(list2[i]);
  //   }else if(list2[i].createYear =='2018'){
  //     L18.push(list2[i]);
  //   }else {
  //     console.log(list2[i]);
  //   }
  // }
  // // console.log(list2,'--==-=');

  // 模块3 ------
  var polarp = echarts.init(document.getElementById('polarp'));
  var dataMap = {};
  function dataFormatter(obj) {
    var pList = ['上海','北京','广州','杭州','深圳','郑州'];
    // var pList = ['0','1','2','3','4','5'];
    var temp;
    for (var year = 0; year <= 5; year++) {
      var max = 0;
      var sum = 0;
      temp = obj[year];
      for (var i = 0, l = temp.length; i < l; i++) {
        max = Math.max(max, temp[i]);
        sum += temp[i];
        obj[year][i] = {
          name : pList[i],
          value : temp[i]
        }
      }
      obj[year + 'max'] = Math.floor(max / 100) * 100;
      obj[year + 'sum'] = sum;
    }
    return obj;
  }
  // dataMap.dataGDP = dataFormatter({
  //   //max : 60000,
  //   2016:[y16D[0].giveMoney,y16D[1].giveMoney,y16D[2].giveMoney,y16D[3].giveMoney,y16D[4].giveMoney,y16D[5].giveMoney],
  //   // 2017:[y17[0].giveMoney,y17[1].giveMoney,y17[2].giveMoney,y17[3].giveMoney,y17[4].giveMoney,y17[5].giveMoney],
  //   // 2018:[y18[0].giveMoney,y18[1].giveMoney,y18[2].giveMoney,y18[3].giveMoney,y18[4].giveMoney,y18[5].giveMoney]
  // });
  dataMap.dataXI = dataFormatter({
    //max : 25000,
    0:[yShangX[0].giveMoney,yShangX[1].giveMoney,yShangX[2].giveMoney ],
    1:[yBeiX[0].giveMoney,yBeiX[1].giveMoney,yBeiX[2].giveMoney, ],
    2:[yGuangX[0].giveMoney,yGuangX[0].giveMoney,yGuangX[2].giveMoney],
    3:[yShenX[0].giveMoney,yShenX[1].giveMoney,yShenX[2].giveMoney],
    4:[yHangX[0].giveMoney,yHangX[1].giveMoney,yHangX[2].giveMoney],
    5:[yZhengX[0].giveMoney,yZhengX[1].giveMoney,yZhengX[2].giveMoney],
    // 0:[yShangD[1].giveMoney,yShangX[1].giveMoney ],
    // 1:[yBeiD[1].giveMoney,yBeiX[1].giveMoney, ],
    // 2:[yGuangD[1].giveMoney,yGuangX[1].giveMoney],
    // 3:[yShenD[1].giveMoney,yShenX[1].giveMoney],
    // 4:[yHangD[1].giveMoney,yHangX[1].giveMoney],
    // 5:[yZhengD[1].giveMoney,yZhengX[1].giveMoney],
  });
  dataMap.dataDI = dataFormatter({
    //max : 4000,
    0:[yShangD[0].giveMoney,yShangD[1].giveMoney,yShangD[2].giveMoney],
    1:[yBeiD[0].giveMoney,yBeiD[1].giveMoney,yBeiD[2].giveMoney,],
    2:[yGuangD[0].giveMoney,yGuangD[1].giveMoney,yGuangD[2].giveMoney],
    3:[yShenD[0].giveMoney,yShenD[1].giveMoney,yShenD[2].giveMoney],
    4:[yHangD[0].giveMoney,yHangD[1].giveMoney,yHangD[2].giveMoney],
    5:[yZhengD[0].giveMoney,yZhengX[0].giveMoney,yZhengD[1].giveMoney],
    // 0:[yShangD[0].giveMoney,yShangX[0].giveMoney,yShangD[1].giveMoney,yShangX[1].giveMoney,yShangD[2].giveMoney,yShangX[2].giveMoney ],
    // 1:[yBeiD[0].giveMoney,yBeiX[0].giveMoney,yBeiD[1].giveMoney,yBeiX[1].giveMoney,yBeiD[2].giveMoney,yBeiX[2].giveMoney, ],
    // 2:[yGuangD[0].giveMoney,yGuangX[0].giveMoney,yGuangD[1].giveMoney,yGuangX[1].giveMoney,yGuangD[2].giveMoney,yGuangX[2].giveMoney],
    // 3:[yShenD[0].giveMoney,yShenX[0].giveMoney,yShenD[1].giveMoney,yShenX[1].giveMoney,yShenD[2].giveMoney,yShenX[2].giveMoney],
    // 4:[yHangD[0].giveMoney,yHangX[0].giveMoney,yHangD[1].giveMoney,yHangX[1].giveMoney,yHangD[2].giveMoney,yHangX[2].giveMoney],
    // 5:[yZhengD[0].giveMoney,yZhengX[0].giveMoney,yZhengD[1].giveMoney,yZhengX[1].giveMoney,yZhengD[2].giveMoney,yZhengX[2].giveMoney],
  });

  // dataMap.dataAI = dataFormatter({
  //   0:[allShangD,allShangX],
  //   1:[allBeiD,allBeiX],
  //   2:[allGuangD,allGuangX],
  //   3:[allShenD,allShenX],
  //   4:[allHangD,allHangX],
  //   5:[allZhengD,allZhengX],
  // });

  // dataMap.dataEstate = dataFormatter({
  //   //max : 3600,
  //   2011:[1074.93,411.46,918.02,224.91,384.76,],
  //   2010:[1006.52,377.59,697.79,192,309.25,733.37,],
  //   2009:[1062.47,308.73,612.4,173.31,286.65,605.27,],
  //   2008:[844.59,227.88,513.81,166.04,273.3,500.81,182.7,],
  //
  //
  // });
  // dataMap.dataFinancial = dataFormatter({
  //   //max : 3200,
  //   2011:[2215.41,756.5,746.01,519.32,447.46],
  //   2010:[1863.61,572.99,615.42,448.3,346.44],
  //   2009:[1603.63,461.2,525.67,361.64,291.1],
  //   2008:[1519.19,368.1,420.74,290.91,219.09],
  //
  // });

  var  coordinates = {
    baseOption: {
      timeline: {
        show:false,
        // y: 0,
        axisType: 'category',
        // realtime: false,
        // loop: false,
        autoPlay: true,
        // currentIndex: 2,
        playInterval: 5000,
        // controlStyle: {
        //     position: 'left'
        // },
        data: [
          {
            value: '0',
            tooltip: {
              formatter: function (params) {
                return params.name + '达到又一个高度';
              }
            },
            symbol: 'diamond',
            symbolSize: 8
          },
          {
            value: '1',
            tooltip: {
              formatter: function (params) {
                return params.name + '达到又一个高度';
              }
            },
            symbol: 'diamond',
            symbolSize: 8
          },
          {
            value: '2',
            tooltip: {
              formatter: function (params) {
                return params.name + '达到又一个高度';
              }
            },
            symbol: 'diamond',
            symbolSize: 8
          },
          {
            value: '3',
            tooltip: {
              formatter: function (params) {
                return params.name + '达到又一个高度';
              }
            },
            symbol: 'diamond',
            symbolSize: 8
          },
          {
            value: '4',
            tooltip: {
              formatter: function (params) {
                return params.name + '达到又一个高度';
              }
            },
            symbol: 'diamond',
            symbolSize: 8
          },
          {
            value: '5',
            tooltip: {
              formatter: function (params) {
                return params.name + '达到又一个高度';
              }
            },
            symbol: 'diamond',
            symbolSize: 8
          },
        ],
        label: {
          formatter : function(s) {
            return (new Date(s)).getFullYear();
          }
        }
      },
      title: {
        y: 'top',
        textStyle:{
          color:"#fff",
          fontSize:12
        },
      },
      tooltip: { },
      color:['#ffcc3f','#ff8714'],
      // color:['#ff8714','blue'],
      // legend: {
      //   orient: 'vertical',
      //   x: 'right',
      //   data: ['信用', '抵押'],
      //   textStyle:{
      //     color:"#fff",
      //     fontSize:2
      //   },
      // },
      calculable : true,
      xAxis: [
        {
          type:'category',
          data:['2016','2017','2018'],
          axisLabel: {
            interval:0,
            textStyle: {
              color: '#fff',
              fontSize:8
            },
            splitLine:{show: false},//去除网格线
          },
          // splitLine: {show: true}
        }
      ],
      yAxis: [
        {
          type: 'value',
          // position: 'right',
          name: '放款额（亿元）',
          nameTextStyle:{
            fontSize :3,
            margin:10,
            color: '#fff'
          },
          // nameLocation:'middle',
          axisLabel: {
            // inside: true,
            textStyle: {
              color: '#fff',
              fontSize:8
            }
          },
          splitLine:{show: false}//去除网格线
        },
        // {
        //   type: 'value',
        //   // position: 'right',
        //   name: '放款额（亿元）',
        //   nameTextStyle:{
        //     fontSize :3,
        //     margin:10,
        //     color: '#fff'
        //   },
        //   // nameLocation:'middle',
        //   axisLabel: {
        //     // inside: true,
        //     textStyle: {
        //       color: '#fff',
        //       fontSize:8
        //     }
        //   },
        //   splitLine:{show: false}//去除网格线
        // }
      ],
      series: [
        {
          name: '信用',
          type: 'line',
          // barWidth : 30,//柱图宽度
          label : {
            normal : {
              textStyle : {
                fontSize : 6
              }
            }
          }
        },
        {name: '抵押',
          type: 'bar',
          // yAxisIndex: 1,
          barWidth : 30,//柱图宽度
          label : {
            normal : {
              // formatter: '{b}:{c}: ({d}%)',
              textStyle : {
                fontSize : 6
              }
            }
          },
        },
        {
          name: '放款占比',
          type: 'pie',
          center: ['30%', '35%'],
          radius: '15%',
          label : {
            normal : {
              // formatter: '{b}:{c}: ({d}%)',
              textStyle : {
                fontSize : 6
              }
            }
          },

          z: 100
        }
      ]
    },
    options: [
      {
        title : {
          text: '上海 放款对比',
          textStyle:{
            fontSize:12
          },
        },
        series : [
          {data: dataMap.dataXI['0']},
          {data: dataMap.dataDI['0']},
          // {data: dataMap.dataAI['0']},
          // {data: [
          //   {name:L17[0].productType, value:allShangD },
          //   {name:L17[1].productType, value:allShangX },
          // ]},
          {data: [
            {name:'信用', value: allShangX},
            {name:'抵押', value:allShangD  },

          ]}
        ]
      },
      {
        title : {
          text: '北京 放款对比',
          textStyle:{
            fontSize:12
          },
        },
        series : [
          {data: dataMap.dataXI['1']},
          {data: dataMap.dataDI['1']},
          {data: [
            {name:'信用', value: allBeiX},
            {name:'抵押', value:allBeiD },
          ]},
          // {data: [
          //   {name:L17[0].productType, value:allBeiD },
          //   {name:L17[1].productType, value:allBeiX },
          // ]}
        ]
      },
      {
        title : {
          text: '广州 放款对比',
          textStyle:{
            fontSize:12
          },
        },
        series : [
          {data: dataMap.dataXI['2']},
          {data: dataMap.dataDI['2']},
          {data: [
            {name:'信用', value: allGuangX},
            {name:'抵押', value:allGuangD }
          ]},
        ]
      },
      {
        title : {
          text: '深圳 放款对比',
          textStyle:{
            fontSize:12
          },
        },
        series : [
          {data: dataMap.dataXI['3']},
          {data: dataMap.dataDI['3']},
          {data: [
            {name:'信用', value: allShenX},
            {name:'抵押', value:allShenD },

          ]},
        ]
      },
      {
        title : {
          text: '杭州 放款对比',
          textStyle:{
            fontSize:12
          },
        },
        series : [
          {data: dataMap.dataXI['4']},
          {data: dataMap.dataDI['4']},
          {data: [
            {name:'信用', value: allHangX},
            {name:'抵押', value:allHangD },

          ]},
        ]
      },
      {
        title : {
          text: '郑州 放款对比',
          textStyle:{
            fontSize:12
          },
        },
        series : [
          {data: dataMap.dataXI['5']},
          {data: dataMap.dataDI['5']},
          {data: [
            {name:'信用', value: allZhengX},
            {name:'抵押', value:allZhengD },

          ]},
        ]
      }

    ]
  };
  polarp.setOption(coordinates);
}

// 模块4----  地图+ 设计
function MyFourth() {
  var MyFourthTimer  = setInterval(allMoney,5000);
  var fourthTimer222  = setInterval(playMoney,100000);
}
function fourthData() {
    allMoney();
    playMoney();
}
function allMoney() {
  $.ajax({
    url: 'http://192.168.1.124:1480/queryNotCity',
    type: "GET",
    async:false,
    crossDomain: true,
    dataType: "json",
    headers: {
      "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
    },
    success: function (data) {
      var moneyAnd = data.data;
      var  registerNum = moneyAnd[0].registerNum;
      var  planMoney = parseInt(moneyAnd[0].planMoney) ;


      $("#dataNums").rollNum({
        deVal:registerNum
      });
      $("#dataNums").value = formatCurrency(registerNum);

      $("#dataNums2").rollNum({
        deVal:planMoney
      });
      $("#dataNums2").value = formatCurrency(planMoney);
      // console.log(moneyAnd[0].planMoney,'----',moneyAnd[0].registerNum );
      // var dataNums = document.getElementById('dataNums');
      // var dataNums2 = document.getElementById('dataNums2');
      // dataNums.innerHTML = formatCurrency(registerNum);
      // dataNums2.innerHTML = formatCurrency(planMoney);

      // allNumShow(registerNum,planMoney)
    }

  })
}
function playMoney() {
  $.ajax({
    url: 'http://192.168.1.124:1480/queryCity',
    type: "GET",
    crossDomain: true,
    async:false,
    dataType: "json",
    headers: {
      "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
    },
    success: function (data) {
      var moneyCity = data.data;
      for(var i=0;i<moneyCity.length;i++){
        if(moneyCity[i].city=="北京"){
          var registerNum =  moneyCity[i].registerNum ;
          var planMoney =  parseInt(moneyCity[i].planMoney) ;
          var beiSpan = document.getElementById('beiSpan1');
          var beiSpan2 = document.getElementById('beiSpan2');
          beiSpan.innerHTML = formatCurrency(registerNum);
          beiSpan2.innerText = formatCurrency(planMoney);
          // $("#beiSpan1").countUp();
          // $("#beiSpan2").countUp();

          // $('.beiSpan')[0].setAttribute ( 'data-to', registerNum);
          // $('.beiSpan')[1].setAttribute ( 'data-to', planMoney);

        }else if(moneyCity[i].city=="上海"){
          var registerNum =  moneyCity[i].registerNum;
          var planMoney =  parseInt(moneyCity[i].planMoney);

          var shangSpan = document.getElementsByClassName('shangSpan')[0];
          var shangSpan2 = document.getElementsByClassName('shangSpan')[1];
          shangSpan.innerHTML = formatCurrency(registerNum);
          shangSpan2.innerHTML = formatCurrency(planMoney);
          // $(".shangSpan").countUp();

        }else if(moneyCity[i].city=="广州"){
          var registerNum =  moneyCity[i].registerNum;
          var planMoney =  parseInt(moneyCity[i].planMoney);
          var guangSpan = document.getElementsByClassName('guangSpan')[0];
          var guangSpan2 = document.getElementsByClassName('guangSpan')[1];
          guangSpan.innerHTML = formatCurrency(registerNum);
          guangSpan2.innerHTML = formatCurrency(planMoney);
          // $(".guangSpan").countUp();

        }else if(moneyCity[i].city=="深圳"){
          var registerNum =  moneyCity[i].registerNum;
          var planMoney =  parseInt(moneyCity[i].planMoney);
          var shenSpan = document.getElementsByClassName('shenSpan')[0];
          var shenSpan2 = document.getElementsByClassName('shenSpan')[1];
          shenSpan.innerHTML = formatCurrency(registerNum);
          shenSpan2.innerHTML = formatCurrency(planMoney);
          // $(".shenSpan").countUp();

        }else if(moneyCity[i].city=="杭州"){
          var registerNum =  moneyCity[i].registerNum;
          var planMoney =  parseInt(moneyCity[i].planMoney);
          var hangSpan = document.getElementsByClassName('hangSpan')[0];
          var hangSpan2 = document.getElementsByClassName('hangSpan')[1];
          hangSpan.innerHTML = formatCurrency(registerNum);
          hangSpan2.innerHTML = formatCurrency(planMoney);
          // $(".hangSpan").countUp();
        }else if(moneyCity[i].city=="郑州"){
          var registerNum =  moneyCity[i].registerNum;
          var planMoney =  parseInt(moneyCity[i].planMoney);
          var zhengSpan = document.getElementsByClassName('zhengSpan')[0];
          var zhengSpan2 = document.getElementsByClassName('zhengSpan')[1];
          zhengSpan.innerHTML = formatCurrency(registerNum);
          zhengSpan2.innerHTML = formatCurrency(planMoney);
          // $(".hangSpan").countUp();
        } else {
          // console.log(moneyCity,'----=-==-')
        }
        // $(".countSpan").countUp();
      }
      // detailMoney(moneyCity);
    }
  })
}

function allNumShow(num1,num2) {
  show_num1(num1);
  show_num2(num2);
}
function show_num1(n) {
  var it = $(".t_num1 i");
  var len = String(n).length;
  for(var i = 0; i < len; i++) {
    if(it.length <= i) {
      $(".t_num1").append("<i></i>");
    }
    var num = String(n).charAt(i);
    //根据数字图片的高度设置相应的值
    var y = -parseInt(num) * 58;
    var obj = $(".t_num1 i").eq(i);
    obj.animate({
      backgroundPosition: '(0 ' + String(y) + 'px)'
    }, 'slow', 'swing', function() {});
  }
  // $("#cur_num").val(n);
}
function show_num2(m) {
  var it = $(".t_num2 i");
  var len = String(m).length;
  for(var i = 0; i < len; i++) {
    if(it.length <= i) {
      $(".t_num2").append("<i></i>");
    }
    var num = String(m).charAt(i);
    //根据数字图片的高度设置相应的值
    var y = -parseInt(num) * 58;
    var obj = $(".t_num2 i").eq(i);
    obj.animate({
      backgroundPosition: '(0 ' + String(y) + 'px)'
    }, 'slow', 'swing', function() {});
  }
  // $("#cur_num").val(n);
}


function MyFifth() {
  var fifthTimer  =setInterval(fifthData,360000);
}
function fifthData() {
  $.ajax({
    url:'http://192.168.1.124:1480/queryV2Trend',
    type:"GET",
    crossDomain:true,
    dataType:"json",
    headers:{
      "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
    },
    success:function (data) {
      var  quarterList = data.data;
      quarter(quarterList);
    }
  });
}
function quarter(data) {
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
      fontSize:6,
      color: '#FFF'
    },
    color:['#ff8714','#00e2e3'],
    legend: {
      x : 'right',
      y : 'top',
      padding:1,                                   //图例内边距，单位px  5  [5, 10]  [5,10,5,10]
      itemGap:5,                                  //图例每项之间的间隔
      itemWidth:15,                               //图例标记的图形宽度
      itemHeight:10,
      data:['服务客户数','协议贷款额'],
      textStyle: {
        fontSize:8,
        color: '#FFF'
      }
    },
    xAxis : [
      {
        axisLabel: {
          show: true,
          interval:0,
          rotate:40,
          textStyle: {
            color: '#fff',
            fontSize:4
          }
        },
        // splitLine:{show: false},//去除网格线
        type : 'category',
        data : [data[0].qu,data[1].qu,data[2].qu,data[3].qu,data[4].qu,data[5].qu,data[6].qu,data[7].qu,data[8].qu,]
      },
    ],
    yAxis : [
      {
        type : 'value',
        name : '人数',
        splitLine:{show: false},//去除网格线
        axisLabel : {
          formatter: '{value}万',
          fontSize:8
        }
      },
      {
        type : 'value',
        name : '金额',
        splitLine:{show: false},//去除网格线
        axisLabel : {
          formatter: '{value}亿',
          fontSize:8
        }
      }
    ],
    series : [
      {
        name:'服务客户数',
        type:'bar',
        barWidth : 30,//柱图宽度
        data:[data[0].serviceNum,data[1].serviceNum,data[2].serviceNum,data[3].serviceNum,data[4].serviceNum,data[5].serviceNum,data[6].serviceNum,data[7].serviceNum,data[8].serviceNum,]
      },
      {
        name:'协议贷款额',
        type:'line',
        yAxisIndex: 1,
        data:[data[0].planMoney,data[1].planMoney,data[2].planMoney,data[3].planMoney,data[4].planMoney,data[5].planMoney,data[6].planMoney,data[7].planMoney,data[8].planMoney]
      }
    ]
  };
  column.setOption(line);
}

// 第六部分
function MySixth() {
  lastData();
  var  lastTimer =  setInterval(myLast,600000);
}


function myLast() {
  //   年度
  yearCommissionTop();
  yearContractTop();
  yearServiceTop();


  //  季度
  seasonCommissionTop();
  seasonContractTop();
  seasonServiceTop();
  //  月度
  monthCommissionTop();
  monthContractTop();
  monthServiceTop();


  //$('#ul').appendChild($('#ul').children[0].cloneNode(true));
}
//   轮播   ------
function lastData() {
  var ul = document.getElementById("ul"); // 获得ul
  var ulLis = ul.children;// 获得ul的盒子 以此来生成ol中li的个数
  var liWidth = ul.children[0].offsetWidth;// 获得每个li的宽度
  // 克隆第一张，放到最后一张后面
  // 1. 克隆元素
  ul.appendChild(ul.children[0].cloneNode(true));

  var timer = null; // 轮播图的定时器
  var key = 0;// 控制播放的张数

  function animate(obj,target){
    // 首先清除掉定时器
    clearInterval(obj.timer);
    // 用来判断 是+ 还是 -  即说明向左走还是向右走
    var speed = obj.offsetLeft < target ? 15 : -15;
    obj.timer = setInterval(function(){
      var result = target - obj.offsetLeft;//它们的差值不会超过speed
      obj.style.left = obj.offsetLeft + speed + "px";
      // 有可能有小数的存在，所以在这里要做个判断
      if (Math.abs(result) <= Math.abs(speed)) {
        clearInterval(obj.timer);
        obj.style.left = target + "px";
      }
    },10);
  }

  var timer = setInterval(autoplay,10000);// 自动轮播

  function autoplay(){
    /*自动轮播时,要对播放的张数key进行一个判断,如果播放的张数超过ulLis.length-1,
    就要重头开始播放.  因为我们克隆了第一张并将其放在最后面,所以我们要从第二张图片开始播放*/
    key++; // 先++
    if(key > ulLis.length-1){// 后判断
      ul.style.left = 0; // 迅速调回
      key = 1; // 因为第4张是第一张，所以播放的时候是从第2张开始播放
    }
    // 动画部分
    animate(ul,-key*liWidth);
  }
}
//   --年度  榜单
function yearCommissionTop() {
  $.ajax({
      url:'http://192.168.1.124:1480/stage2/v1/yearCommission',
      type:"GET",
      async:false,
      crossDomain:true,
      dataType:"json",
      headers:{
          "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
        },
      success:function (data) {
        $('.yearCommission li').remove('.yearLi');
        var sixedList = data.data;
        for(var i =0;i<sixedList.length;i++){
          var yearLi   = document.createElement('li');
          yearLi.className = 'yearLi';
          yearLi.innerHTML = sixedList[i].rownum+'、'+ sixedList[i].subCompanyName+'  '+ sixedList[i].commissionTotal +'万' ;
          $('.yearCommission').append(yearLi);
        }
      }
    });
}
function yearContractTop() {
  $.ajax({
    url:'http://192.168.1.124:1480/stage2/v1/yearContract',
    type:"GET",
    async:false,
    crossDomain:true,
    dataType:"json",
    headers:{
      "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
    },
    success:function (data) {
      $('.yearContract li').remove('.yearLi');
      var sixedList = data.data;
      for(var i =0;i<sixedList.length;i++){
        var yearLi   = document.createElement('li');
        yearLi.className = 'yearLi';
        yearLi.innerHTML = sixedList[i].rownum+'、'+ sixedList[i].subCompanyName+'  '+ sixedList[i].giveMoney  +'亿';
        $('.yearContract').append(yearLi);
      }
    }
  });
}
function yearServiceTop() {
  $.ajax({
    url:'http://192.168.1.124:1480/stage2/v1/yearService',
    type:"GET",
    async:false,
    crossDomain:true,
    dataType:"json",
    headers:{
      "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
    },
    success:function (data) {
      $('.yearService li').remove('.yearLi');
      var sixedList = data.data;
      for(var i =0;i<sixedList.length;i++){
        var yearLi   = document.createElement('li');
        yearLi.className = 'yearLi';
        yearLi.innerHTML = sixedList[i].rownum+'、'+ sixedList[i].subCompanyName+'  '+ sixedList[i].serviceContractNum  +'个' ;
        $('.yearService').append(yearLi);
      }
    }
  });
}
//      季度榜单  -- -
function seasonCommissionTop() {
  $.ajax({
    url:'http://192.168.1.124:1480/stage2/v1/seasonCommission',
    type:"GET",
    async:false,
    crossDomain:true,
    dataType:"json",
    headers:{
      "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
    },
    success:function (data) {
      $('#seasonCommission li').remove('.yearLi');
      var sixedList = data.data;
      for(var i =0;i<sixedList.length;i++){
        var yearLi   = document.createElement('li');
        yearLi.className = 'yearLi';
        yearLi.innerHTML = sixedList[i].rownum+'、'+ sixedList[i].subCompanyName+'  '+ sixedList[i].commissionTotal +'万' ;
        $('#seasonCommission').append(yearLi);
      }
    }
  });
}
function seasonContractTop() {
  $.ajax({
    url:'http://192.168.1.124:1480/stage2/v1/seasonContract',
    type:"GET",
    async:false,
    crossDomain:true,
    dataType:"json",
    headers:{
      "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
    },
    success:function (data) {
      $('#seasonContract li').remove('.yearLi');
      var sixedList = data.data;
      for(var i =0;i<sixedList.length;i++){
        var yearLi   = document.createElement('li');
        yearLi.className = 'yearLi';
        yearLi.innerHTML = sixedList[i].rownum+'、'+ sixedList[i].subCompanyName+'  '+ sixedList[i].giveMoney +'亿' ;
        $('#seasonContract').append(yearLi);
      }
    }
  });
}
function seasonServiceTop() {
  $.ajax({
    url:'http://192.168.1.124:1480/stage2/v1/seasonService',
    type:"GET",
    async:false,
    crossDomain:true,
    dataType:"json",
    headers:{
      "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
    },
    success:function (data) {
      $('#seasonService li').remove('.yearLi');
      var sixedList = data.data;
      for(var i =0;i<sixedList.length;i++){
        var yearLi   = document.createElement('li');
        yearLi.className = 'yearLi';
        yearLi.innerHTML = sixedList[i].rownum+'、'+ sixedList[i].subCompanyName+'  '+ sixedList[i].serviceContractNum  +'个';
        $('#seasonService').append(yearLi);
      }
    }
  });
}
//      月度榜单  -- -
function monthCommissionTop() {
  $.ajax({
    url:'http://192.168.1.124:1480/stage2/v1/monthCommission',
    type:"GET",
    async:false,
    crossDomain:true,
    dataType:"json",
    headers:{
      "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
    },
    success:function (data) {
      $('#monthCommission li').remove('.yearLi');
      var sixedList = data.data;
      for(var i =0;i<sixedList.length;i++){
        var yearLi   = document.createElement('li');
        yearLi.className = 'yearLi';
        yearLi.innerHTML = sixedList[i].rownum+'、'+ sixedList[i].subCompanyName+'  '+ sixedList[i].commissionTotal  +'万';
        $('#monthCommission').append(yearLi);
      }
    }
  });
}
function monthContractTop() {
  $.ajax({
    url:'http://192.168.1.124:1480/stage2/v1/monthContract',
    type:"GET",
    async:false,
    crossDomain:true,
    dataType:"json",
    headers:{
      "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
    },
    success:function (data) {
      $('#monthContract li').remove('.yearLi');
      var sixedList = data.data;
      for(var i =0;i<sixedList.length;i++){
        var yearLi   = document.createElement('li');
        yearLi.className = 'yearLi';
        yearLi.innerHTML = sixedList[i].rownum+'、'+ sixedList[i].subCompanyName+'  '+ sixedList[i].giveMoney  +'亿';
        $('#monthContract').append(yearLi);
      }
    }
  });
}
function monthServiceTop() {
  $.ajax({
    url:'http://192.168.1.124:1480/stage2/v1/monthService',
    type:"GET",
    async:false,
    crossDomain:true,
    dataType:"json",
    headers:{
      "Authorization": "Bearer 467405f6-331c-4914-beb7-42027bf09a01"
    },
    success:function (data) {
      $('#monthService li').remove('.yearLi');
      var sixedList = data.data;
      for(var i =0;i<sixedList.length;i++){
        var yearLi   = document.createElement('li');
        yearLi.className = 'yearLi';
        yearLi.innerHTML = sixedList[i].rownum+'、'+ sixedList[i].subCompanyName+'  '+ sixedList[i].serviceContractNum  +'个';
        $('#monthService').append(yearLi);
      }
    }
  });
}



//   千分位处理
function formatCurrency(num) {
  if(num) {
    //将num中的$,去掉，将num变成一个纯粹的数据格式字符串
    num = num.toString().replace(/\$|\,/g,'');
    //如果num不是数字，则将num置0，并返回
    if(''==num || isNaN(num)){return 'Not a Number ! ';}
    //如果num是负数，则获取她的符号
    var sign = num.indexOf("-")> 0 ? '-' : '';
    //如果存在小数点，则获取数字的小数部分
    var cents = num.indexOf(".")> 0 ? num.substr(num.indexOf(".")) : '';
    cents = cents.length>1 ? cents : '' ;//注意：这里如果是使用change方法不断的调用，小数是输入不了的
    //获取数字的整数数部分
    num = num.indexOf(".")>0 ? num.substring(0,(num.indexOf("."))) : num ;
    //如果没有小数点，整数部分不能以0开头
    if('' == cents){ if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
    //如果有小数点，且整数的部分的长度大于1，则整数部分不能以0开头
    else{if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
    //针对整数部分进行格式化处理，这是此方法的核心，也是稍难理解的一个地方，逆向的来思考或者采用简单的事例来实现就容易多了
    /*
      也可以这样想象，现在有一串数字字符串在你面前，如果让你给他家千分位的逗号的话，你是怎么来思考和操作的?
      字符串长度为0/1/2/3时都不用添加
      字符串长度大于3的时候，从右往左数，有三位字符就加一个逗号，然后继续往前数，直到不到往前数少于三位字符为止
     */
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) {
      num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
    }
    //将数据（符号、整数部分、小数部分）整体组合返回
    return (sign + num + cents);
  }

}
