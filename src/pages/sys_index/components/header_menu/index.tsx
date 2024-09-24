import { Button, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, UserOutlined, AppstoreOutlined, DatabaseOutlined, AlertOutlined, SettingOutlined, LogoutOutlined, InfoOutlined } from '@ant-design/icons';
import Lottie from 'lottie-react';
import animationData from '@/assets/lotties/user.json'

const HeaderMenu = () => {

    const location = useLocation();

    const currentPath = location.pathname;

    return (
        <div className='flex items-center px-4'>
            <Menu className='flex-1 overflow-hidden' mode="horizontal" selectedKeys={[currentPath]}>
                <Menu.Item key="/index/home" icon={<HomeOutlined />}>
                    <Link to="/">智能化预警系统</Link>
                </Menu.Item>
                <Menu.Item key="/index/traffic_data" icon={<DatabaseOutlined />}>
                    <Link to="traffic_data">流量数据</Link>
                </Menu.Item>
                <Menu.Item key="/index/health_status" icon={<AppstoreOutlined />}>
                    <Link to="health_status">健康状况</Link>
                </Menu.Item>
                <Menu.Item key="/index/performance_show" icon={<AppstoreOutlined />}>
                    <Link to="performance_show">性能预览</Link>
                </Menu.Item>
                <Menu.Item key="/index/user_detail" icon={<UserOutlined />}>
                    <Link to="user_detail">用户细查</Link>
                </Menu.Item>
                <Menu.Item key="/index/page_detail" icon={<UserOutlined />}>
                    <Link to="page_detail">页面细查</Link>
                </Menu.Item>
                <Menu.Item key="/index/system_error" icon={<AlertOutlined />}>
                    <Link to="system_error">系统错误</Link>
                </Menu.Item>
                <Menu.Item key="/index/alert_settings" icon={<SettingOutlined />}>
                    <Link to="alert_settings">警报设置</Link>
                </Menu.Item>
            </Menu>
            <Button type='link' icon={<div className='w-8 h-8'>
                <Lottie animationData={animationData} loop={true} />
            </div>
            } className="flex items-center">
                刘杰
            </Button>
        </div>
    );
}

export default HeaderMenu;
