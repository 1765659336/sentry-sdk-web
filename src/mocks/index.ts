export declare interface I_MockMenuDataItem {
    url: string,
    title: string,
    key: string,
    btnS:{
        name: string,
        key: string,
        checked: boolean
    }[]
}

export const mockMenuData:I_MockMenuDataItem[] = [
    {
        "url": "/index/home",
        "title": "智能化预警系统",
        "key": "/index/home",
        "btnS": [
        ]
    },
    {
        "url": "/index/traffic_data",
        "title": "流量数据",
        "key": "/index/traffic_data",
        "btnS": [
        ]
    },
    {
        "url": "/index/user_record_detail",
        "title": "用户细查详情页",
        "key": "/index/user_record_detail",
        "btnS": [
        ]
    },
    {
        "url": "/index/health_status",
        "title": "健康状况",
        "key": "/index/health_status",
        "btnS": [
        ]
    },
    {
        "url": "/index/performance_show",
        "title": "性能预览",
        "key": "/index/performance_show",
        "btnS": [
        ]
    },
    {
        "url": "/index/user_detail",
        "title": "用户细查",
        "key": "/index/user_detail",
        "btnS": [
            {
                "name": "查看详情",
                "key": "ShowDetail",
                "checked": true
            },
        ]
    },
    {
        "url": "/index/system_error",
        "title": "系统错误",
        "key": "/index/system_error",
        "btnS": [
            {
                "name": "查看详情",
                "key": "ShowDetail",
                "checked": true
            },
            {
                "name": "查看回放",
                "key": "ShowRrwebUrl",
                "checked": true
            },
        ]
    },
    {
        "url": "/index/alert_settings",
        "title": "警报设置",
        "key": "/index/alert_settings",
        "btnS": [
        ]
    },
    {
        "url": "/index/system_error_detail_behavior",
        "title": "系统错误用户操作记录详情页",
        "key": "/index/system_error_detail_behavior",
        "btnS": [
        ]
    },
    {
        "url": "/index/system_error_detail_rrwebUrl",
        "title": "系统错误回放详情页",
        "key": "/index/system_error_detail_rrwebUrl",
        "btnS": [
        ]
    },
    {
        "url": "/index/page_detail",
        "title": "页面细查",
        "key": "/index/page_detail",
        "btnS": [
            {
                "name": "查看详情",
                "key": "ShowDetail",
                "checked": true
            },
        ]
    },
    {
        "url": "/index/page_record_detail",
        "title": "页面记录详情页",
        "key": "/index/page_record_detail",
        "btnS": [
        ]
    },
    {
        "url": "/index/page_management",
        "title": "页面管理",
        "key": "/index/page_management",
        "btnS": [
        ]
    },
    {
        "url": "/index/system_distribution",
        "title": "系统分配",
        "key": "/index/system_distribution",
        "btnS": [
        ]
    }
]
