import { CloseOutlined } from "@ant-design/icons";
import { Card, Collapse, Input, Table, message } from "antd";
import { useNavigate } from "react-router-dom";
import { data } from './mockData'
import { useState } from "react";

const { Panel } = Collapse;

const PageRecordDetail = () => {

    const navigator = useNavigate();

    const [loading, setLoading] = useState(false);

    const columns = [
        {
            title: "功能点",
            dataIndex: "content",
            key: "content",
            render: (value: string) => JSON.parse(value).dom
        },
        {
            title: "使用次数",
            dataIndex: "num",
            key: "num",
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.num - b.num,
        },
    ];

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

        <Card title="页面详情" extra={<CloseOutlined onClick={() => navigator(-1)} />}>
            <Collapse>
                <Panel header="搜索条件" key="1">
                    <div className="flex flex-col">
                        <Input placeholder="功能点" className="mb-2"
                            onPressEnter={handleSearch} />
                    </div>
                </Panel>
            </Collapse>
            <Table className="overflow-x-auto" dataSource={data} columns={columns} pagination={{
                pageSize: 5,
                total: data.length,
                onChange: handleSearch
            }} loading={loading} />
        </Card>
    )
}

export default PageRecordDetail;