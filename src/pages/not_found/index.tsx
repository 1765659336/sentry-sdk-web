import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '@/assets/lotties/404.json'

const NotFound: React.FC = () => {
    const navigator = useNavigate();

    return (
        <Result
            status="404"
            title={<div className='flex items-center justify-center'>
                <div className='w-20 h-20'>
                    <Lottie animationData={animationData} loop={true} />
                </div>
            </div>}
            subTitle="不好，没有找到这个页面"
            extra={
                <Button type="primary" onClick={() => navigator('/')}>
                    回到首页
                </Button>
            }
        />
    );
};

export default NotFound;
