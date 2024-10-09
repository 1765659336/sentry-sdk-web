import DescriptionComputer from "@/components/description_computer";
import { E_Describe_Title } from "@/components/description_computer/type";
import ConcentrationDurationDistributionEcharts from "@/components/echarts_option";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Card, Flex, Statistic, StatisticProps } from "antd";
import CountUp from 'react-countup';

const formatter: StatisticProps['formatter'] = (value) => (
    <>
        <CountUp end={value as number} separator="," />
        <Statistic
            value={'较昨日' + 11.28}
            precision={2}
            valueStyle={{ color: '#3f8600', fontSize: '12px' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
        />
    </>
);

const TrafficData = () => {
    return (
        <>
            <Card title="流量数据" bordered={false}>
                <div className="flex gap-2 bg-gray-100 p-2">
                    <Card className="flex-1" bordered={false}>
                        <Statistic
                            title={<Flex align="center">
                                <span>
                                    浏览量（PV）
                                </span>
                                <DescriptionComputer title={E_Describe_Title.浏览量PV}></DescriptionComputer>
                            </Flex>}
                            formatter={formatter}
                            value={6265}
                            valueStyle={{ fontWeight: 'bold' }}
                        />
                    </Card>
                    <Card className="flex-1" bordered={false}>
                        <Statistic
                            title={<Flex align="center">
                                <span>
                                    访客量（UV）
                                </span>
                                <DescriptionComputer title={E_Describe_Title.访客UV}></DescriptionComputer>
                            </Flex>}
                            formatter={formatter}
                            value={56}
                            valueStyle={{ fontWeight: 'bold' }}
                        />
                    </Card>
                </div>
            </Card>
            <Card title={<Flex gap={6}>
                <span>页面访问量趋势</span>
                <DescriptionComputer title={E_Describe_Title.页面访问量趋势}></DescriptionComputer>
            </Flex>}>
                <ConcentrationDurationDistributionEcharts options={pageOptions} style={{ 'width': '100%', 'height': '240px' }}></ConcentrationDurationDistributionEcharts>
            </Card>
            <Card title={<Flex gap={6}>
                <span>用户活跃量趋势</span>
                <DescriptionComputer title={E_Describe_Title.用户活跃量趋势}></DescriptionComputer>
            </Flex>}>
                <ConcentrationDurationDistributionEcharts options={userOptions} style={{ 'width': '100%', 'height': '240px' }}></ConcentrationDurationDistributionEcharts>
            </Card>
            <Card title={<Flex gap={6}>
                <span>页面访问量Top10</span>
                <DescriptionComputer title={E_Describe_Title.页面访问量Top10}></DescriptionComputer>
            </Flex>}>
                <ConcentrationDurationDistributionEcharts options={PTopTenData} style={{ 'width': '100%', 'height': '400px' }}></ConcentrationDurationDistributionEcharts>
            </Card>
            <Card title={<Flex gap={6}>
                <span>设备分辨率量Top10</span>
                <DescriptionComputer title={E_Describe_Title.设备分辨率量Top10}></DescriptionComputer>
            </Flex>}>
                <ConcentrationDurationDistributionEcharts options={UTopTenData} style={{ 'width': '100%', 'height': '400px' }}></ConcentrationDurationDistributionEcharts>
            </Card>
        </>
    )
}

export default TrafficData;

const pageOptions: echarts.EChartsOption = {
    title: {
        text: '系统页面总访问量/时间'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['今日', '本周', '上周', '本月', '上月']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '今日',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '本周',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '上周',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '本月',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '上月',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
}

const userOptions: echarts.EChartsOption = {
    title: {
        text: '系统用户活跃量/时间'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['今日', '本周', '上周', '本月', '上月']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '今日',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '本周',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '上周',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '本月',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '上月',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
}

const UTopTenData: echarts.EChartsOption = {
    title: {
        text: '设备分辨率/时间'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            saveAsImage: { show: true }
        }
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['1920x1080', '1366x768', '1280x800', '1080x720', '1024x768', '800x600', '720x480', '640x480', '480x320', '320x240']
    },
    series: [
        {
            name: '今日',
            type: 'bar',
            data: [120, 123, 201, 233, 342, 534, 688, 1002, 1421, 2321]
        },
        {
            name: '本周',
            type: 'bar',
            data: [1222, 1293, 2021, 2523, 3432, 5634, 6828, 10022, 14221, 20221]
        },
        {
            name: '上周',
            type: 'bar',
            data: [1220, 1293, 2021, 2533, 3432, 5624, 6888, 10022, 14921, 20221]
        },
        {
            name: '本月',
            type: 'bar',
            data: [2120, 2193, 2221, 2233, 2332, 2534, 2688, 21002, 24921, 20321]
        },
        {
            name: '上月',
            type: 'bar',
            data: [3120, 3123, 3221, 3233, 3332, 3634, 3888, 31002, 31921, 30321]
        },
    ]
}

const PTopTenData: echarts.EChartsOption = {
    title: {
        text: '页面标题/时间'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            saveAsImage: { show: true }
        }
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['页面1', '页面2', '页面3', '页面4', '页面5', '页面6', '页面7', '页面8', '页面9', '页面10']
    },
    series: [
        {
            name: '今日',
            type: 'bar',
            data: [1220, 1293, 2021, 2533, 3432, 5634, 6888, 10002, 14921, 20321]
        },
        {
            name: '本周',
            type: 'bar',
            data: [12202, 12923, 20221, 25323, 34322, 56234, 68828, 100022, 142921, 203221]
        },
        {
            name: '上周',
            type: 'bar',
            data: [12220, 12293, 20221, 25233, 34322, 56324, 68828, 100022, 149221, 202321]
        },
        {
            name: '本月',
            type: 'bar',
            data: [21220, 21293, 22021, 22533, 23432, 25634, 26888, 210002, 214921, 220321]
        },
        {
            name: '上月',
            type: 'bar',
            data: [31220, 31293, 32021, 32533, 33432, 35634, 36888, 310002, 314921, 320321]
        },
    ]
}