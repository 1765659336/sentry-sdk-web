import { Button, Card, Collapse, Input, Table, message } from "antd";
import { data } from './mockData'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Panel } = Collapse;

const PageDetail = () => {

    const navigator = useNavigate();

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

    const columns = [
        {
            title: "页面标题",
            dataIndex: "title",
            key: "title"
        },
        {
            title: "页面url",
            dataIndex: "url",
            key: "url"
        },
        {
            title: "访问量",
            dataIndex: "num",
            key: "num",
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.num - b.num,
        },
        {
            title: "操作",
            dataIndex: "action",
            key: "action",
            render: (_, record) => (
                <>
                    <Button
                        type="link"
                        onClick={() => navigator(`/index/page_record_detail/${record.uuid}`)}
                    >
                        查看详情
                    </Button>
                </>
            ),
        },
    ];

    return (
        <>
            <Card>
                <Collapse>
                    <Panel header="搜索条件" key="1">
                        <div className="flex flex-col">
                            <Input placeholder="页面标题" className="mb-2"
                                onPressEnter={handleSearch} />
                        </div>
                    </Panel>
                </Collapse>
            </Card>
            <Card bordered={false}>
                <Table className="overflow-x-auto" dataSource={data} columns={columns} pagination={{
                    pageSize: 5,
                    total: data.length,
                    onChange: handleSearch
                }} loading={loading} />
            </Card>
        </>
    )
}

export default PageDetail;