import { Button, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, UserOutlined, AppstoreOutlined, DatabaseOutlined, AlertOutlined, SettingOutlined, LayoutOutlined, TabletOutlined, ApiOutlined } from '@ant-design/icons';
import Lottie from 'lottie-react';
import animationData from '@/assets/lotties/user.json'
import { mockMenuData } from '@/mocks';

const menuData = [
    {
        key: '/index/home',
        to: '/',
        icon: <HomeOutlined />,
        title: '智能化预警系统',
    },
    {
        key: '/index/traffic_data',
        to: 'traffic_data',
        icon: <DatabaseOutlined />,
        title: '流量数据',
    },
    {
        key: '/index/health_status',
        to: 'health_status',
        icon: <AppstoreOutlined />,
        title: '健康状况',
    },
    {
        key: '/index/performance_show',
        to: 'performance_show',
        icon: <AppstoreOutlined />,
        title: '性能预览',
    },
    {
        key: '/index/user_detail',
        to: 'user_detail',
        icon: <UserOutlined />,
        title: '用户细查',
    },
    {
        key: '/index/page_detail',
        to: 'page_detail',
        icon: <LayoutOutlined />,
        title: '页面细查',
    },
    {
        key: '/index/system_error',
        to: 'system_error',
        icon: <AlertOutlined />,
        title: '系统错误',
    },
    {
        key: '/index/alert_settings',
        to: 'alert_settings',
        icon: <SettingOutlined />,
        title: '警报设置',
    },
    {
        key: '/index/page_management',
        to: 'page_management',
        icon: <TabletOutlined />,
        title: '页面管理'
    },
    {
        key: '/index/system_distribution',
        to: 'system_distribution',
        icon: <ApiOutlined />,
        title: '系统分配'
    }
]

const HeaderMenu = () => {

    const location = useLocation();

    const currentPath = location.pathname;

    return (
        <div className='flex items-center px-4'>
            <Menu className='flex-1 overflow-hidden' mode="horizontal" selectedKeys={[currentPath]}>
                {menuData.filter(i => mockMenuData.some(m => m.url === i.key)).map(item => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.to}>{item.title}</Link>
                    </Menu.Item>
                ))}
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
