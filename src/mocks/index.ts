export declare interface I_MockMenuDataItem {
    url: string,
    title: string,
    key: string,
    btnS:{
        name: string,
        key: string,
        checked: boolean
    }[],
    btnPermissions: string
}

export const mockMenuData:I_MockMenuDataItem[] = [
    {
        "url": "/index/home",
        "title": "智能化预警系统",
        "key": "/index/home",
        "btnS": [
        ],
        btnPermissions: "IndexHome"
    },
    {
        "url": "/index/traffic_data",
        "title": "流量数据",
        "key": "/index/traffic_data",
        "btnS": [
        ],
        btnPermissions: "IndexTrafficData"
    },
    {
        "url": "/index/user_record_detail",
        "title": "用户细查详情页",
        "key": "/index/user_record_detail",
        "btnS": [
        ],
        btnPermissions: "IndexUserRecordDetail"
    },
    {
        "url": "/index/health_status",
        "title": "健康状况",
        "key": "/index/health_status",
        "btnS": [
        ],
        btnPermissions: "IndexHealthStatus"
    },
    {
        "url": "/index/performance_show",
        "title": "性能预览",
        "key": "/index/performance_show",
        "btnS": [
        ],
        btnPermissions: "IndexPerformanceShow"
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
        ],
        btnPermissions: "IndexUserDetail"
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
        ],
        btnPermissions: "IndexSystemError"
    },
    {
        "url": "/index/alert_settings",
        "title": "警报设置",
        "key": "/index/alert_settings",
        "btnS": [
        ],
        btnPermissions: "IndexAlertSettings"
    },
    {
        "url": "/index/system_error_detail_behavior",
        "title": "系统错误用户操作记录详情页",
        "key": "/index/system_error_detail_behavior",
        "btnS": [
        ],
        btnPermissions: "IndexSystemErrorDetailBehavior"
    },
    {
        "url": "/index/system_error_detail_rrwebUrl",
        "title": "系统错误回放详情页",
        "key": "/index/system_error_detail_rrwebUrl",
        "btnS": [
        ],
        btnPermissions: "IndexSystemErrorDetailRrwebUrl"
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
        ],
        btnPermissions: "IndexPageDetail"
    },
    {
        "url": "/index/page_record_detail",
        "title": "页面记录详情页",
        "key": "/index/page_record_detail",
        "btnS": [
        ],
        btnPermissions: "IndexPageRecordDetail"
    },
    {
        "url": "/index/page_management",
        "title": "页面管理",
        "key": "/index/page_management",
        "btnS": [
        ],
        btnPermissions: "IndexPageManagement"
    },
    {
        "url": "/index/system_distribution",
        "title": "系统分配",
        "key": "/index/system_distribution",
        "btnS": [
        ],
        btnPermissions: "IndexSystemDistribution"
    }
]
