import { Outlet, useNavigate } from "react-router-dom"
import HeaderMenu from "./components/header_menu";
import SystemList from "./components/system_list";
import NoSystemSelected from './components/no_system_selected'
import { useSystemStore } from '@/store/index'
import { Drawer, FloatButton, Tour, TourProps } from "antd";
import { useEffect, useRef, useState } from "react";
import { BellOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import SystemSetting from "./components/system_setting";
import SystemMessage from "./components/system_message";

const SysIndex = () => {
    const navigator = useNavigate();

    const systemUid = useSystemStore((state) => state.systemUid);

    const [open, setOpen] = useState(false);

    const [openSystemSetting, setOpenSystemSetting] = useState(false);

    const [openSystemMessage, setOpenSystemMessage] = useState(false);

    const setSystemUid = useSystemStore(state => state.setSystemUid);

    const [tourOpen, setTourOpen] = useState(false);

    const systemSelectTriggerRef = useRef(null);

    const systemLogoutTriggerRef = useRef(null);

    const systemSettingTriggerRef = useRef(null);

    const systemMessageTriggerRef = useRef(null);

    const steps: TourProps['steps'] = [
        {
            title: '选择系统',
            description: '点击它，再选择你要使用的系统',
            placement: 'leftTop',
            target: () => systemSelectTriggerRef.current,
        },
        {
            title: '网页设置',
            description: '点击它，设置网页主题和风格',
            placement: 'leftTop',
            target: () => systemSettingTriggerRef.current,
        },
        {
            title: '消息通知',
            description: '点击它，查看收到的通知',
            placement: 'leftTop',
            target: () => systemMessageTriggerRef.current,
        },
        {
            title: '退出登录',
            description: '点击它，退出网页',
            placement: 'leftTop',
            target: () => systemLogoutTriggerRef.current,
        },
    ];

    const handleLogout = () => {
        navigator('/login');
        setSystemUid('');
    };

    useEffect(() => {
        setTimeout(() => {
            if (!systemUid) {
                setTourOpen(true);
            }
        }, 1000)
    }, [])

    return (

        <>
            <div className="flex flex-col h-screen">
                <HeaderMenu></HeaderMenu>
                <div className="flex-1">
                    <div className="overflow-y-auto p-2 min-h-full bg-gray-100">
                        {systemUid ? <Outlet></Outlet> : <NoSystemSelected></NoSystemSelected>}
                    </div>
                    <FloatButton.Group shape="square" style={{ insetInlineEnd: 24 }}>
                        <FloatButton ref={systemSettingTriggerRef} onClick={() => setOpenSystemSetting(true)} icon={<SettingOutlined />} />
                        <FloatButton ref={systemMessageTriggerRef} onClick={() => setOpenSystemMessage(true)} badge={{ dot: true }} icon={<BellOutlined />} />
                        <FloatButton ref={systemSelectTriggerRef} onClick={() => setOpen(true)} />
                        <FloatButton ref={systemLogoutTriggerRef} icon={<LogoutOutlined />} onClick={handleLogout} ></FloatButton>
                    </FloatButton.Group>
                </div>
            </div>
            <Drawer
                title="系统列表"
                placement="right"
                onClose={() => setOpen(false)}
                open={open}
                width={400}
            >
                <SystemList />
            </Drawer>
            <Drawer
                title="系统设置"
                placement="right"
                onClose={() => setOpenSystemSetting(false)}
                open={openSystemSetting}
                width={400}
            >
                <SystemSetting></SystemSetting>
            </Drawer>
            <Drawer
                title="消息通知"
                placement="right"
                onClose={() => setOpenSystemMessage(false)}
                open={openSystemMessage}
                width={400}
            >
                <SystemMessage></SystemMessage>
            </Drawer>

            <Tour open={tourOpen} onClose={() => setTourOpen(false)} steps={steps} />
        </>
    )
}

export default SysIndex;