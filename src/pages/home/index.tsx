import React, { useEffect, useState } from 'react';
import { Typography, Card, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom'
import FlipButton from '@/components/flip_button/index'
import useInView from '@/hooks/useInView'

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {

    const navigator = useNavigate();

    const [pageLoading, setPageLoading] = useState(true);

    const { ref, isInView } = useInView();

    useEffect(() => {
        if (isInView && pageLoading) {
            setTimeout(() => {
                setPageLoading(false);
            }, 3000)
        }
    }, [isInView]);

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Card ref={ref} className="w-full max-w-4xl p-6 shadow-lg rounded-lg bg-white">
                <Title level={1} className="text-center text-3xl mb-4">
                    欢迎使用监控平台
                </Title>
                <Paragraph className="text-center text-lg mb-8">
                    这里是您的监控平台的首页，您可以在这里查看系统状态、配置监控和访问详细的报表。
                </Paragraph>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Card loading={pageLoading} className="text-center my-2">
                            <Title level={2}>10</Title>
                            <Paragraph>系统用户数</Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card loading={pageLoading} className="text-center my-2">
                            <Title level={2}>5</Title>
                            <Paragraph>警报数</Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card loading={pageLoading} className="text-center my-2">
                            <Title level={2}>3</Title>
                            <Paragraph>系统监控时间（天）</Paragraph>
                        </Card>
                    </Col>
                </Row>
                <div className="text-center mt-8">
                    <FlipButton text="查看详情" onClick={() => navigator('/index/traffic_data')}></FlipButton>
                </div>
            </Card>
        </div>
    );
};

export default Home;
