import React from 'react';
import ReactECharts from 'echarts-for-react';  //    <ReactECharts option={options} />
import './ECharts.css'
export default function ECharts() {

    const options = [
        {
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
            title: {
                text: 'Gradient'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['Line 1', 'Line 2', 'Line 3', 'Line 4']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Line 1',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,

                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [140, 232, 101, 264, 90, 340, 250]
                },
                {
                    name: 'Line 2',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,

                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 282, 111, 234, 220, 340, 310]
                },
                {
                    name: 'Line 3',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,

                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 132, 201, 334, 190, 130, 220]
                },
                {
                    name: 'Line 4',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,

                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 402, 231, 134, 190, 230, 120]
                },
                {
                    name: 'Line 5',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {
                        opacity: 0.8,

                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 302, 181, 234, 210, 290, 150]
                }
            ]

        },
        {

            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 100]
            }]
        },
        {
            title: {
                text: '堆叠区域图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [150, 232, 201, 154, 190, 330, 410]
                }
            ]
        },
        {
            title: {
                text: 'Access From'
            },

            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ]
                }
            ]

        }, {
            title: {
                text: 'scatter'
            },
            xAxis: {},
            yAxis: {},
            series: [
                {
                    symbolSize: 20,
                    data: [
                        [10.0, 8.04],
                        [8.07, 6.95],
                        [13.0, 7.58],
                        [9.05, 8.81],
                        [11.0, 8.33],
                        [14.0, 7.66],
                        [13.4, 6.81],
                        [10.0, 6.33],
                        [14.0, 8.96],
                        [12.5, 6.82],
                        [9.15, 7.2],
                        [11.5, 7.2],
                        [3.03, 4.23],
                        [12.2, 7.83],
                        [2.02, 4.47],
                        [1.05, 3.33],
                        [4.05, 4.96],
                        [6.03, 7.24],
                        [12.0, 6.26],
                        [12.0, 8.84],
                        [7.08, 5.82],
                        [5.02, 5.68]
                    ],
                    type: 'scatter'
                }
            ]

        }, {

            title: [
                {
                    text: 'Radial Polar '
                }
            ],
            polar: {
                radius: [30, '80%']
            },
            radiusAxis: {
                max: 4
            },
            angleAxis: {
                type: 'category',
                data: ['a', 'b', 'c', 'd'],
                startAngle: 75
            },
            tooltip: {},
            series: {
                type: 'bar',
                data: [2, 1.2, 2.4, 3.6],
                coordinateSystem: 'polar',
                label: {
                    show: true,
                    position: 'middle',
                    formatter: '{b}: {c}'
                }
            },
            backgroundColor: '#fff',
            animation: false

        }
    ]
    return <div className='ECharts'>
        {
            options.map((v, k) => (
                <div className='chart-item' key={k}>
                    <ReactECharts option={v} style={{ height: '100%' }} />
                </div>
            ))
        }
    </div>;
};

