import React, { useState } from 'react';
import { Button, Card, Checkbox, CheckboxProps, Drawer, Flex, List } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import AssignUsersModal from '@/components/assign_users_modal';
import AssignUsersDrawer from '@/components/assign_users_drawer';
import DescriptionComputer from '@/components/description_computer';
import { E_Describe_Title } from '@/components/description_computer/type';

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

    const [assignUsersOpen, setAssignUsersOpen] = useState(false);

    const [assignUsersConfirmLoading, setAssignUsersConfirmLoading] = useState(false);

    const [assignUsersDrawerOpen, setAssignUsersDrawerOpen] = useState(false);

    const assignUsersHandleOk = () => {
        setAssignUsersConfirmLoading(true);
        setTimeout(() => {
            setAssignUsersOpen(false);
            setAssignUsersConfirmLoading(false);
        }, 2000);
    }

    const assignUsersHandleCancel = () => {
        setAssignUsersOpen(false);
    }

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
            <Card title={<Flex gap={6}>
                <span>系统分配</span>
                <DescriptionComputer title={E_Describe_Title.系统分配}></DescriptionComputer>
            </Flex>}>
                <div className='flex justify-between items-center mb-4'>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        {!checkAll ? '全不选' : '全选'}
                    </Checkbox>
                    <Button type="primary" onClick={() => setAssignUsersDrawerOpen(true)}>
                        用户列表
                    </Button>
                </div>
                <List
                    itemLayout="horizontal"
                    dataSource={mockData}
                    renderItem={(item) => (
                        <List.Item>
                            <Flex wrap align="center">
                                <Checkbox
                                    checked={checkedList.includes(item)}
                                    onChange={(e) => onChange(e, item)}>
                                </Checkbox>
                                <div className="ml-2 mr-2 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 transition-transform duration-300 p-1">
                                    {item.name}
                                </div>
                                <Button type="link" onClick={() => setAssignUsersOpen(true)}>
                                    分配用户
                                </Button>
                            </Flex>
                        </List.Item>
                    )}
                />
            </Card>
            <AssignUsersDrawer open={assignUsersDrawerOpen} onClose={() => setAssignUsersDrawerOpen(false)} onSubmit={() => setAssignUsersDrawerOpen(false)} getConfig={() => { }}></AssignUsersDrawer>
            <AssignUsersModal open={assignUsersOpen} onOk={() => assignUsersHandleOk()} onCancel={assignUsersHandleCancel} confirmLoading={assignUsersConfirmLoading}></AssignUsersModal>
        </>
    )
};

export default SystemDistribution;