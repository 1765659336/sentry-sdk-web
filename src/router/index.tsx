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
import PageManagement from '@/pages/page_management';
import SystemDistribution from '@/pages/system_distribution';
import ProtectedRoute from '@/components/protected_route';

export const globalRouters = createHashRouter([
    {
        path: '/',
        element: <Navigate to="/index" />,
    },
    {
        path: '/login',
        element: <ProtectedRoute>
            <Login />
        </ProtectedRoute>
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
                element: <ProtectedRoute>
                    <Home />
                </ProtectedRoute>,
            },
            {
                path: 'traffic_data',
                element: <ProtectedRoute>
                    <TrafficData />
                </ProtectedRoute>,
            },
            {
                path: 'health_status',
                element: <ProtectedRoute>
                    <HealthStatus />
                </ProtectedRoute>,
            },
            {
                path: 'performance_show',
                element: <ProtectedRoute>
                    <PerformanceShow />
                </ProtectedRoute>,
            },
            {
                path: 'user_detail',
                element: <ProtectedRoute>
                    <UserDetail />
                </ProtectedRoute>,
            },
            {
                path: 'system_error',
                element: <ProtectedRoute>
                    <SystemError />
                </ProtectedRoute>,
            },
            {
                path: 'alert_settings',
                element: <ProtectedRoute>
                    <AlertSettings />
                </ProtectedRoute>,
            },
            {
                path: 'user_record_detail/:userId/:beginTime',
                element: <ProtectedRoute>
                    <UserRecordDetail />
                </ProtectedRoute>,
            },
            {
                path: 'system_error_detail_behavior/:uuid',
                element: <ProtectedRoute>
                    <SystemErrorDetailBehavior />
                </ProtectedRoute>,
            },
            {
                path: 'system_error_detail_rrwebUrl/:rrwebUrl',
                element: <ProtectedRoute>
                    <SystemErrorDetailRrwebUrl />
                </ProtectedRoute>,
            },
            {
                path: 'page_detail',
                element: <ProtectedRoute>
                    <PageDetail />
                </ProtectedRoute>,
            },
            {
                path: 'page_record_detail/:uuid',
                element: <ProtectedRoute>
                    <PageRecordDetail />
                </ProtectedRoute>,
            },
            {
                path: 'page_management',
                element: <ProtectedRoute>
                    <PageManagement />
                </ProtectedRoute>
            },
            {
                path: 'system_distribution',
                element: <ProtectedRoute>
                    <SystemDistribution />
                </ProtectedRoute>
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