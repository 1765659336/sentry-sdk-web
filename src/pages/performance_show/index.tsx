import ConcentrationDurationDistributionEcharts from "@/components/echarts_option";
import { Card, Col, Row, Statistic, Table } from "antd";

const networkOption: echarts.EChartsOption = {
    title: {
        text: ' ',
        subtext: '用户访问系统的网络类型',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 1048, name: 'unknown' },
                { value: 12, name: '3g' },
                { value: 580, name: '4g' },
                { value: 484, name: '5g' },
                { value: 300, name: 'wifi' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}

const networkOption2: echarts.EChartsOption = {
    title: {
        text: ' ',
        subtext: '系统网络请求耗时占比',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 1048, name: '< 1s' },
                { value: 1222, name: '1-5s' },
                { value: 80, name: '5-10s' },
                { value: 44, name: '10-30s' },
                { value: 30, name: '> 30s' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}

const rawData = [
    { url: 'http://www.aaa.com/', count: 2, time: '18.21s' },
    { url: 'https://www.aaa.com/version', count: 2, time: '3.78s' },
    { url: 'https://www.aaa.com/desMonitor', count: 12, time: '2.98s' },
    { url: 'https://www.aaa.com/wonitor', count: 33, time: '2.31s' },
    { url: 'https://www.aaa.com/desEvent', count: 2, time: '2.2s' },
    { url: 'http://101.132.110.99/', count: 2, time: '1.73s' },
    { url: 'https://www.aaa.com/', count: 16, time: '868.88ms' },
    { url: 'https://www.aaa.com/sd', count: 24, time: '788.33ms' },
    { url: 'https://www.aaa.com/event', count: 4, time: '327ms' },
];

const rawData2 = [
    { url: 'http://www.aaa.com/', count: 323123, time: '18.21s' },
    { url: 'https://www.aaa.com/version', count: 223123, time: '3.78s' },
    { url: 'https://www.aaa.com/desMonitor', count: 12232, time: '2.98s' },
    { url: 'https://www.aaa.com/wonitor', count: 8323, time: '2.31s' },
    { url: 'https://www.aaa.com/desEvent', count: 6232, time: '2.2s' },
    { url: 'http://101.132.110.99/', count: 4312, time: '1.73s' },
    { url: 'https://www.aaa.com/', count: 3236, time: '868.88ms' },
    { url: 'https://www.aaa.com/sd', count: 2324, time: '788.33ms' },
    { url: 'https://www.aaa.com/event', count: 234, time: '327ms' },
];

const columns = [
    {
        title: '页面路由',
        dataIndex: 'url',
        key: 'url',
    },
    {
        title: '数量',
        dataIndex: 'count',
        key: 'count'
    },
    {
        title: '平均耗时',
        dataIndex: 'time',
        key: 'time'
    }
];

const columns2 = [
    {
        title: '接口地址',
        dataIndex: 'url',
        key: 'url',
    },
    {
        title: '数量',
        dataIndex: 'count',
        key: 'count'
    },
    {
        title: '平均耗时',
        dataIndex: 'time',
        key: 'time'
    }
];

const PerformanceShow = () => {
    return (
        <>

            <Row>
                <Col span={24}>
                    <Card title='页面性能'>
                        <Statistic
                            title="页面平均加载时间"
                            formatter={(value) => <>{value} ms</>}
                            value={6265}
                            valueStyle={{ fontWeight: 'bold' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card title='网络类型占比'>
                        <ConcentrationDurationDistributionEcharts options={networkOption} style={{ 'width': '100%', 'height': '550px' }}></ConcentrationDurationDistributionEcharts>
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card title='页面加载耗时路由Top 10'>
                        <Table
                            className="overflow-x-auto"
                            dataSource={rawData}
                            columns={columns}
                            rowKey="url"
                            pagination={false}
                        />
                    </Card>
                </Col>
                <Col span={24}>
                    <Card title="接口性能">
                        <Row>
                            <Col xs={24} md={8}>
                                <Card className="flex-1">
                                    <Statistic
                                        title="接口请求总量"
                                        value={62605}
                                        valueStyle={{ fontWeight: 'bold' }}
                                    />
                                </Card>
                            </Col>
                            <Col xs={24} md={8}>
                                <Card className="flex-1">
                                    <Statistic
                                        title="接口请求平均耗时"
                                        formatter={value => <>{value} ms</>}
                                        value={753}
                                        valueStyle={{ fontWeight: 'bold' }}
                                    />
                                </Card>
                            </Col>
                            <Col xs={24} md={8}>
                                <Card className="flex-1">
                                    <Statistic
                                        title="接口请求成功率"
                                        formatter={value => <>{value} %</>}
                                        value={99.71}
                                        valueStyle={{ fontWeight: 'bold' }}
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card title='接口请求耗时分段数量占比'>
                        <ConcentrationDurationDistributionEcharts options={networkOption2} style={{ 'width': '100%', 'height': '550px' }}></ConcentrationDurationDistributionEcharts>
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card title='接口请求耗时Top 10'>
                        <Table
                            className="overflow-x-auto"
                            dataSource={rawData2}
                            columns={columns2}
                            rowKey="url"
                            pagination={false}
                        />
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PerformanceShow;