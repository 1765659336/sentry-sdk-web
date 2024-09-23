import { Card, Col, List, Modal, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import CalendarHeatmap, { ReactCalendarHeatmapValue } from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { useParams, useNavigate } from 'react-router-dom'
import { data } from './mockData'
import dayjs from 'dayjs';
import ReactJson from 'react-json-view';
import { E_TrackerDetailType } from '@/main';
import Meta from 'antd/es/card/Meta';
import Lottie from 'lottie-react';
import animationData from '@/assets/lotties/avatar.json'
import { CloseOutlined } from '@ant-design/icons';

const UserRecordDetail = () => {

    const { userId, beginTime } = useParams();

    const navigator = useNavigate();

    const values = [
        { date: '2024-05-01', count: 12 },
        { date: '2024-06-22', count: 122 },
        { date: '2024-08-30', count: 38 },
    ];

    const [currentRecord, setCurrentRecord] = useState<ReactCalendarHeatmapValue<string> | undefined>(undefined)

    const [open, setOpen] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(true);

    const [jsonData, setJsonData] = useState({});

    const [selected, setSelected] = useState(null);

    const [pageLoading, setPageLoading] = useState<boolean>(true);

    const calendarHeatmapClick = (value: ReactCalendarHeatmapValue<string> | undefined) => {
        if (value) {
            setLoading(true);
            setCurrentRecord(value)
            setOpen(true)
            setTimeout(() => {
                setLoading(false);
            }, 2000)
        }
    }

    const recordItemClick = (item, index) => {
        setJsonData(JSON.parse(item.content));
        setSelected(index);
    }

    useEffect(() => {
        setPageLoading(true);
        setTimeout(() => {
            setPageLoading(false);
        }, 2000)
    }, [userId, beginTime])

    return (
        <Card title='用户详情' extra={<CloseOutlined onClick={() => navigator(-1)} />}>
            <Row>
                <Col xs={24} sm={12}>
                    <Card loading={pageLoading} title={'共' + data.length + '条记录'}>
                        <div className='overflow-y-auto h-80'>
                            {
                                data.map((item, index) => (
                                    <div key={item.uuid} className={`p-2 mb-2 border-b-2 cursor-pointer ${selected === index ? 'bg-blue-100' : ''}`} onClick={() => recordItemClick(item, index)}>
                                        <p>{item.uuid}</p>
                                        <p>{dayjs(item.timestamp).format('YYYY-MM-DD HH:mm:ss')}</p>
                                        <p>{E_TrackerDetailType[item.type]}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12}>
                    <Card loading={pageLoading} title="步骤详情">
                        <div className='overflow-y-auto h-80'>
                            <ReactJson src={jsonData} theme="summerfruit:inverted" />
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={4}>
                    <Card
                        loading={pageLoading}
                        hoverable
                        cover={<div className='w-full h-full'><Lottie animationData={animationData} loop={true} /></div>}
                    >
                        <Meta title="刘杰" description={userId} />
                    </Card>
                </Col>
                <Col xs={24} sm={20}>
                    <Card loading={pageLoading}>
                        <CalendarHeatmap
                            startDate={new Date('2024-01-01')}
                            endDate={new Date('2024-12-31')}
                            values={values}
                            showWeekdayLabels={true}
                            monthLabels={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                            weekdayLabels={['周一', '周二', '周三', '周四', '周五', '周六', '周日']}
                            onClick={(value) => calendarHeatmapClick(value)}
                        />
                    </Card>
                </Col>
            </Row>
            <Modal
                title={<p>userId为{userId}的用户在{currentRecord?.date}当天的系统使用记录</p>}
                footer={null}
                loading={loading}
                open={open}
                onCancel={() => setOpen(false)}
            >
                <List
                    bordered
                    dataSource={[{ date: '2024/06/24 09:22:22', timestamp: '1726643847221' },
                    { date: '2024/07/24 14:42:21', timestamp: '1326643847221' },
                    { date: '2024/07/24 15:42:21', timestamp: '1713643847221' },
                    { date: '2024/07/24 18:42:21', timestamp: '1726644847221' }]}
                    renderItem={(item) => (
                        <List.Item>
                            <p className='cursor-pointer' onClick={() => {
                                navigator(`/index/user_record_detail/${userId}/${item.timestamp}`, {
                                    replace: true
                                }); setOpen(false)
                            }}>
                                {item.date} 进入系统
                            </p>
                        </List.Item>
                    )}
                />
            </Modal>
        </Card>
    )
}

export default UserRecordDetail;