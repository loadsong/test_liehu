/**
 * Created by cm on 2017/4/10.
 */
var app = angular.module('myApp', []);
app.controller('weekcontroller', function($scope, $http) {
    //$http.get("/queryAll/query")
    $scope.authors = ["heyu", "liushuangya"];
    console.log($scope.authors);
    $scope.selected = 0;
    $scope.myFunc = function() {
        $http({
            method: 'GET',
            url: '/queryAll/query',
            params:{author:$scope.authorselect}
        })
            .then(function (result) {
                //$scope.names = result.data;
                var x_week=[];
                var y_line_all=[];
                var y_line_all_int=[];
                $.each(result.data, function (index, item) {
                    //循环获取数据
                    x_week.push(result.data[index].week);
                    console.log(result.data[index].week);
                    y_line_all.push(result.data[index].line_all);

                });
                 // alert(x_week);
               //  alert(y_line_all);
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
                // $scope.authorcharts=result.data.author;

            });

    };

//     Highcharts.chart('container', {
//
//         xAxis: {
//             categories:
//         },
//
//         series: [{
//             data: [29.8, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
//         }]
//     });
//
});