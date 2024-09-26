import { useState } from "react";
import { Input, Card, Button, Collapse, Table, DatePicker, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Panel } = Collapse;

const { RangePicker } = DatePicker;

const mockData = Array.from({ length: 10 }, (_, index) => ({
    key: index,
    userId: `user${index + 1}`,
    internalId: `id${index + 1}`,
    page: `https://example.com/page${index + 1}`,
    platform: `Platform ${index + 1}`,
    ipAddress: `192.168.1.${index + 1}`,
    browser: `Browser ${index + 1}`,
    location: `Location ${index + 1}`,
    timestamp: new Date().getTime(),
    action: `Action ${index + 1}`,
}));



const UserDetail = () => {

    const navigator = useNavigate();

    const columns = [
        { title: "用户ID", dataIndex: "userId", key: "userId" },
        { title: "内置ID", dataIndex: "internalId", key: "internalId" },
        { title: "页面URL", dataIndex: "page", key: "page" },
        { title: "设备平台", dataIndex: "platform", key: "platform" },
        { title: "用户IP地址", dataIndex: "ipAddress", key: "ipAddress" },
        { title: "浏览器信息", dataIndex: "browser", key: "browser" },
        { title: "位置", dataIndex: "location", key: "location" },
        { title: "发生时间", dataIndex: "timestamp", key: "timestamp" },
        {
            title: "操作",
            dataIndex: "action",
            key: "action",
            render: (_, record) => (
                <Button
                    type="link"
                    onClick={() => navigator(`/index/user_record_detail/${record.userId}/${record.timestamp}`)}
                >
                    查看详情
                </Button>
            ),
        },
    ];

    const [searchValue, setSearchValue] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        message.loading("加载中...");
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            message.open({
                type: "success",
                content: "加载成功",
                duration: 2,
            })
        }, 2000)
    };

    return (
        <>
            <Card className="p-4 bg-gray-300">
                <Input
                    placeholder="搜索用户ID"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    suffix={
                        <Button
                            type="primary"
                            icon={<SearchOutlined />}
                            onClick={handleSearch}
                            loading={loading}
                        />
                    }
                />
            </Card>
            <Card>
                <Collapse>
                    <Panel header="搜索条件" key="1">
                        <div className="flex flex-col">
                            <RangePicker
                                className="mb-2"
                                placeholder={['发生开始时间', '发生结束时间']}
                                format='YYYY/MM/DD HH:mm:ss'
                                onChange={handleSearch}
                            />
                            <Input placeholder="页面URL" className="mb-2"
                                onPressEnter={handleSearch} />
                            <Input placeholder="内置ID" className="mb-2"
                                onPressEnter={handleSearch} />
                        </div>
                    </Panel>
                </Collapse>
            </Card>
            <Card>
                <Table className="overflow-x-auto" dataSource={mockData} columns={columns} pagination={{
                    pageSize: 5,
                    total: 10,
                    onChange: handleSearch
                }} loading={loading} />
            </Card>
        </>
    );
};

export default UserDetail;
