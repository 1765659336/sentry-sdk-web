import { createHashRouter, Navigate } from 'react-router-dom';
import NotFound from '@/pages/not_found';
import Home from '@/pages/home';
import Index from '@/pages/sys_index';
import AlertSettings from '@/pages/alert_settings'
import Login from '@/pages/login';
import TrafficData from '@/pages/traffic_data';
import HealthStatus from '@/pages/health_status';
import PerformanceShow from '@/pages/performance_show';
import UserDetail from '@/pages/user_detail';
import SystemError from '@/pages/system_error';
import UserRecordDetail from '@/pages/user_record_detail';
import SystemErrorDetailBehavior from '@/pages/system_error_detail_behavior';
import SystemErrorDetailRrwebUrl from '@/pages/system_error_detail_rrwebUrl';
import PageDetail from '@/pages/page_detail';
import PageRecordDetail from '@/pages/page_record_detail';

export const globalRouters = createHashRouter([
    {
        path: '/',
        element: <Navigate to="/index" />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/index',
        element: <Index />,
        children: [
            {
                path: '',
                element: <Navigate to="/index/home" />,
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'traffic_data',
                element: <TrafficData />,
            },
            {
                path: 'health_status',
                element: <HealthStatus />,
            },
            {
                path: 'performance_show',
                element: <PerformanceShow />,
            },
            {
                path: 'user_detail',
                element: <UserDetail />,
            },
            {
                path: 'system_error',
                element: <SystemError />,
            },
            {
                path: 'alert_settings',
                element: <AlertSettings />,
            },
            {
                path: 'user_record_detail/:userId/:beginTime',
                element: <UserRecordDetail />,
            },
            {
                path: 'system_error_detail_behavior/:uuid',
                element: <SystemErrorDetailBehavior />,
            },
            {
                path: 'system_error_detail_rrwebUrl/:rrwebUrl',
                element: <SystemErrorDetailRrwebUrl />,
            },
            {
                path: 'page_detail',
                element: <PageDetail />,
            },
            {
                path: 'page_record_detail/:uuid',
                element: <PageRecordDetail />,
            }
        ]
    },
    {
        path: '404',
        element: <NotFound />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
])