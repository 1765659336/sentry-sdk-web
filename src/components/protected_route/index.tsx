import { mockMenuData } from '@/mocks';
import { axiosCanceler } from '@/request/axiosCancel';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const location = useLocation();

    // 可以在这里便利用户权限，从而判断是否显示页面
    const isAuthenticated = [...mockMenuData.map(i => i.url), '/login'].some(i => location.pathname.startsWith(i));

    // 可以在这里取消接口请求
    axiosCanceler?.removeAllPending();

    return isAuthenticated ? children : <Navigate to="/404" />;
};

export default ProtectedRoute;