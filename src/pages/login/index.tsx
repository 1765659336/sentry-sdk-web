import React, { useState } from 'react';
import { Button, Input, Form, Typography, Space, message, Col, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '@/assets/lotties/login.json'
import animationDataClick from '@/assets/lotties/click.json'

const { Title } = Typography;

const Login: React.FC = () => {
    const navigator = useNavigate();

    const [messageApi, contextHolder] = message.useMessage();

    const [loading, setLoading] = useState(false);

    const onFinish = (values: object) => {
        console.log(values);
        setLoading(true);
        setTimeout(() => {
            messageApi.open({
                type: 'success',
                content: '登录成功',
            });
            setTimeout(() => {
                navigator('/index/home');
                setLoading(false);
            }, 1000);
        }, 2000);
    };

    return (
        <>
            {contextHolder}
            <Row align='middle' className='h-screen'>
                <Col xs={24} sm={18} md={18} lg={14}>
                    <Lottie animationData={animationData} loop={true} />
                </Col>
                <Col xs={24} sm={6} md={6} lg={8}>
                    <div className='px-2' style={{ 'height': '15rem' }}>
                        <Title level={2} className="text-center mb-6">监控平台登录</Title>
                        <Form
                            name="login"
                            initialValues={{ username: 'admin', password: 'a123456' }}
                            onFinish={onFinish}
                            layout="vertical"
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '请输入用户名!' }]}
                            >
                                <Input
                                    prefix={<UserOutlined className="text-gray-400" />}
                                    placeholder="用户名"
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请输入密码!' }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="text-gray-400" />}
                                    placeholder="密码"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Space direction="vertical" className="w-full">
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="w-full"
                                        loading={loading}
                                        style={{ 'position': 'relative' }}
                                    >
                                        <div className='left-2' style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                                            登录
                                        </div>
                                        {loading ? null : <div className='w-30 h-30 overflow-hidden'><Lottie animationData={animationDataClick} loop={true} /></div>}
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>

        </>
    );
};

export default Login;
