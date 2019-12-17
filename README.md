# echartsYaxisFit
实现ECHARTS双Y轴左右刻度线一致
## 先上图：
* 这是未解决的，双Y轴左右刻度线不一致       
![images](https://github.com/maqun520/echartsYaxisFit/blob/master/before.png)
* 这是已解决的，双Y轴左右刻度线一致   
![images](https://github.com/maqun520/echartsYaxisFit/blob/master/after.png) 
## 1、原因
* 刻度在显示时，分割段数不一样，导致左右的刻度线不一致，不能重合在一起。
## 2、思路
* 根据上面的原因去分析，要想左右的刻度线一致，分隔的段数是必须是一样的，这样才能重合。|
## 3、解决方法
①首先固定两边的分隔的段数。

①分别求出左边Y轴和右边Y轴的最大值max和最小值min，根据max和min之间的和去除以分隔的段数，分别算出左边Y轴和右边Y轴的分隔间隔。

②在ECharts中有两个很重要的属性：

interval：强制设置坐标轴分割间隔。

splitNumber：坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。

根据上面的值，结合min和max属性去配置ECharts。
