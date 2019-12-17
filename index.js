app.title = '折柱混合';
 
  //计算最大值
  function calMax(arr) {
    let max = 0;
    arr.forEach((el) => {
      el.forEach((el1) => {
        if (!(el1 === undefined || el1 === '')) {
          if (max < el1) {
            max = el1;
          }
        }
      })
    })
    let maxint = Math.ceil(max / 9.5);//不让最高的值超过最上面的刻度
    let maxval = maxint * 10;//让显示的刻度是整数
    return maxval;
  }
 
  //计算最小值
  function calMin(arr) {
    let min = 0;
    arr.forEach((el) => {
      el.forEach((el1) => {
        if (!(el1 === undefined || el1 === '')) {
          if (min > el1) {
            min = el1;
          }
        }
      })
    })
    let minint = Math.floor(min / 10);
    let minval = minint * 10;//让显示的刻度是整数
    return minval;
  }
 
  var data1 = [59357.9, 52789.77, 24837.98, 14345.02, 2291.93],
    data2 = [-12108.81, 701.43, 1280.75, -2109.83, -18693.95],
    data3 = [0, -11.07, -52.95, -42.25, -84.02],
    data4 = [0, 105.79, 82.59, -264.73, -786.04]
 var ymin1 = 0,
     ymax1 = 0,
     ymin2 = 0,
     ymax2 = 0,
     scale = 0;
  var Min1 = calMin([data1, data2]), Min2 = calMin([data3, data4]),
    Max1 = calMax([data1, data2]), Max2 = calMax([data3, data4]);
if(JSON.stringify(data1.concat(data2,data3,data4)).indexOf("-") != -1){
  if (Min1 < 0 && Max1 > 0) {
              scale = Math.abs(Max1) / Math.abs(Min1);
              ymin1 = Min1;
              ymax1 = Max1;
              if (Max2 > 0 && Min2 < 0) {
                if (Math.abs(Max2) / Math.abs(Min2) > scale) {
                  ymax2 = Max2;
                  ymin2 = -(Max2 / scale);
                } else {
                  ymax2 = -(Min2 / scale);
                  ymin2 = Min2;
                }
              } else {
                ymin2 = -Max2 / scale;
                ymax2 = Max2;
              }
            } else {
              scale = Math.abs(Max2) / Math.abs(Min2);
              ymin2 = Min2;
              ymax2 = Max2;
              ymin1 = -Max1 / scale;
              ymax1 = Max1;
            }
 
}else{
 ymin1 = Min1
     ymax1 = Max1
     ymin2 = Min2
     ymax2 = Max2Z
}

            // console.log(Max1,Min1,'左',Max2,Min2,'右',ymax1,ymin1,ymax2,ymin2)
  option = {
    grid: {left: '100', right: '100', bottom: '100', top: '100'},
    color: ['#0698d6', '#fd8246', '#d773b4', '#41ac7c', '#e86367', '#aada9c'],
    tooltip: {trigger: 'axis', axisPointer: {type: 'cross', crossStyle: {color: '#999'}}},
    legend: {data: ['营业收入', '净利润', '营业收入同比增长率', '净利润同比增长率']},
    xAxis: [{
      type: 'category',
      show: false,
      lineWidth: 0,
      axisPointer: {
        type: 'shadow'
      },
      data: ["2013-12-31", "2014-12-31", "2015-12-31", "2016-12-31", "2017-12-31"]
    }],
    yAxis: [{
      name: '单位：万元',
      nameTextStyle: {color: '#999999'},
      type: "value",
      axisLine: {show: false},
      axisTick: {show: false},
      axisLabel: {verticalAlign: "bottom", color: "#999999"},
      min: ymin1,
      max: ymax1,
//       splitNumber: 5,
//       interval: (Max1 - Min1) / 5
    }, {
      name: '单位：%',
      type: 'value',
      nameTextStyle: {color: '#999999'},
      axisLine: {show: false},
      axisTick: {show: false},
      axisLabel: {verticalAlign: "bottom", color: "#999999"},
      min: ymin2,
      max: ymax2,
//       splitNumber: 5,
//       interval: (Max2 - Min2) / 5
 
    }],
    series: [{name: '营业收入', type: 'bar', barGap: 0, barWidth: 30, data: data1},
      {name: '净利润', type: 'bar', barGap: 0, barWidth: 30, data: data2},
      {name: '营业收入同比增长率', type: 'line', yAxisIndex: 1, data: data3},
      {name: '净利润同比增长率', type: 'line', yAxisIndex: 1, data: data4}
    ]
  }
