import React, { useState } from 'react';
import { Button, Card, Checkbox, CheckboxProps, Drawer, Flex, List } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface I_MockDataItem {
    id: string;
    name: string;
}

const mockData: I_MockDataItem[] = [
    { id: '1', name: '丰恺思系统' },
    { id: '2', name: '协作平台' },
    { id: '3', name: 'OA系统' },
]

const SystemDistribution: React.FC = () => {

    const [checkedList, setCheckedList] = useState(mockData);

    const [open, setOpen] = useState(false);

    const checkAll = mockData.length === checkedList.length;

    const indeterminate = checkedList.length > 0 && checkedList.length < mockData.length;

    const onChange = (e: CheckboxChangeEvent, item: I_MockDataItem) => {
        setCheckedList(e.target.checked ? [...checkedList, item] : checkedList.filter((i) => i !== item));
    };

    const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
        setCheckedList(e.target.checked ? mockData : []);
    };

    return (
        <>
            <Card>
                <div className='flex justify-between items-center mb-4'>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        {!checkAll ? '全不选' : '全选'}
                    </Checkbox>
                    <Button type="primary" onClick={() => setOpen(true)}>
                        用户列表
                    </Button>
                </div>
                <List
                    itemLayout="horizontal"
                    dataSource={mockData}
                    renderItem={(item) => (
                        <List.Item>
                            <Flex wrap>
                                <Checkbox
                                    checked={checkedList.includes(item)}
                                    onChange={(e) => onChange(e, item)}>
                                </Checkbox>
                                <div className="ml-2 mr-2 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 transition-transform duration-300 p-1">
                                    {item.name}
                                </div>
                            </Flex>
                        </List.Item>
                    )}
                />
            </Card>
            <Drawer title="用户列表" onClose={() => setOpen(false)} open={open}>
                <div className='flex justify-between items-center mb-4'>
                    <Checkbox></Checkbox>
                    <Button type="primary" onClick={() => setOpen(true)}>
                        分配
                    </Button>
                </div>
                <List
                    itemLayout="horizontal"
                    dataSource={['刘杰', '曹俊', '周伟']}
                    renderItem={(item) => (
                        <List.Item>
                            <div className='flex w-full justify-between items-center'>
                                <Checkbox>{item}</Checkbox>
                                <Button onClick={() => setOpen(false)}>
                                    获取系统
                                </Button>
                            </div>
                        </List.Item>
                    )}
                />
            </Drawer>
        </>
    )

};

export default SystemDistribution;