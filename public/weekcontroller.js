// 图表配置对象


//arr 就是数组

    $.ajax({

        url: "/queryAll/query",
        data:{"author":"liushuangya"},
        type: "get",
        //dataType: "json", //自动会转换为json
        success: function (result) {


            //data = JSON.parse(data);


            if (typeof result === 'string') { // 判断是否为字符串内容，如果是，则转换成 JSON
                result = JSON.parse(data);


            }
            var x_week=[];
            var y_line_all=[];
            var y_line_all_int=[];
            $.each(result, function (index, item) {
                //循环获取数据
                x_week.push(result[index].week);
                y_line_all.push(result[index].line_all);

            });
          //  alert(x_week);
           // alert(y_line_all);
            y_line_all.forEach(function(data,index,arr){
                y_line_all_int.push(+data);
            });
           // console.log(y_line_all_int);

           // console.log(y_line_all);

            /**
             * Highcharts 在 4.2.0 开始已经不依赖 jQuery 了，直接用其构造函数既可创建图表
             **/
            var chart = new Highcharts.Chart('container', {

                title: {
                    text: '2017年周安排',
                    x: -20
                },
                subtitle: {
                    text: '数据来源: 猎户3.0前台',
                    x: -20
                },
                xAxis: {
                    categories: x_week
                },
                yAxis: {
                    title: {
                        text: '代码量'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: 'm'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [
                    { name:'代码提交总计',
                     data:y_line_all_int
        }]
            });


            $(function () {
                $('#colum').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '月平均降雨量'
                    },
                    subtitle: {
                        text: '数据来源: WorldClimate.com'
                    },
                    xAxis: {
                        categories: [
                            '一月',
                            '二月',
                            '三月',
                            '四月',
                            '五月',
                            '六月',
                            '七月',
                            '八月',
                            '九月',
                            '十月',
                            '十一月',
                            '十二月'
                        ],
                        crosshair: true
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '降雨量 (mm)'
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: '东京',
                        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }, {
                        name: '纽约',
                        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
                    }, {
                        name: '伦敦',
                        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
                    }, {
                        name: '柏林',
                        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
                    }]
                });
            });


        }


});