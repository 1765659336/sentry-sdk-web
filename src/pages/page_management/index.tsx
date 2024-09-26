import React, { useState } from 'react';
import { Button, Card, Checkbox, CheckboxProps, Drawer, Flex, List } from 'antd';
import { I_MockMenuDataItem, mockMenuData as defaultMockMenuData } from '@/mocks';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const PageManagement: React.FC = () => {

    const [checkedList, setCheckedList] = useState<I_MockMenuDataItem[]>(defaultMockMenuData);

    const [mockMenuData, setMockMenuData] = useState<I_MockMenuDataItem[]>(defaultMockMenuData);

    const [open, setOpen] = useState(false);

    const checkAll = mockMenuData.length === checkedList.length;

    const indeterminate = checkedList.length > 0 && checkedList.length < mockMenuData.length;

    const onChange = (e: CheckboxChangeEvent, item: I_MockMenuDataItem) => {
        setCheckedList(e.target.checked ? [...checkedList, item] : checkedList.filter((i) => i !== item));
    };

    const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
        setCheckedList(e.target.checked ? mockMenuData : []);
    };

    const btnChange = (e: CheckboxChangeEvent, item: I_MockMenuDataItem, btn: I_MockMenuDataItem['btnS'][number]) => {
        setMockMenuData(mockMenuData.map(m => {
            if (m.key === item.key) {
                m.btnS = m.btnS.map(b => {
                    if (b.key === btn.key) {
                        b.checked = e.target.checked
                    }
                    return b
                })
            }
            return m;
        }))
    }
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
                    dataSource={mockMenuData}
                    renderItem={(item) => (
                        <List.Item>
                            <Flex wrap>
                                <Checkbox
                                    checked={checkedList.includes(item)}
                                    onChange={(e) => onChange(e, item)}>
                                </Checkbox>
                                <div className="ml-2 mr-2 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 transition-transform duration-300 p-1">
                                    {item.title} - {item.url}
                                </div>
                                {item.btnS.map(btn => <Checkbox className='items-center' checked={btn.checked} onChange={(e) => btnChange(e, item, btn)}>{btn.name}</Checkbox>)}
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
                                    获取权限
                                </Button>
                            </div>
                        </List.Item>
                    )}
                />
            </Drawer>
        </>
    )

};

export default PageManagement;