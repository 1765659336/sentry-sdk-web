import React, { useState } from 'react';
import { Button, Card, Checkbox, CheckboxProps, Flex, Form, Input, List, Modal } from 'antd';
import { I_MockMenuDataItem, mockMenuData as defaultMockMenuData } from '@/mocks';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import AssignUsersModal from '@/components/assign_users_modal';
import AssignUsersDrawer from '@/components/assign_users_drawer';

const PageManagement: React.FC = () => {

    const [checkedList, setCheckedList] = useState<I_MockMenuDataItem[]>(defaultMockMenuData);

    const [mockMenuData, setMockMenuData] = useState<I_MockMenuDataItem[]>(defaultMockMenuData);

    const [assignUsersOpen, setAssignUsersOpen] = useState(false);

    const [assignUsersDrawerOpen, setAssignUsersDrawerOpen] = useState(false);

    const [assignUsersConfirmLoading, setAssignUsersConfirmLoading] = useState(false);

    const [visible, setVisible] = useState(false);

    const [form] = Form.useForm();

    const showModal = (item?: I_MockMenuDataItem) => {
        setVisible(true);
        if (item) {
            form.setFieldsValue({
                title: item.title,
                url: item.url,
                btnPermissions: item.btnPermissions,
            });
        }
    };

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                console.log('Received values:', values);
                setVisible(false);
                form.resetFields();
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    const handleCancel = () => {
        setVisible(false);
        form.resetFields();
    };

    const assignUsersHandleOk = () => {
        setAssignUsersConfirmLoading(true);
        setTimeout(() => {
            setAssignUsersOpen(false);
            setAssignUsersConfirmLoading(false);
        }, 3000);
    }

    const assignUsersHandleCancel = () => {
        setAssignUsersOpen(false);
    }

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
                    <Flex gap={12}>
                        <Button onClick={() => showModal()}>
                            新增页面
                        </Button>
                        <Button type="primary" onClick={() => setAssignUsersDrawerOpen(true)}>
                            用户列表
                        </Button>
                    </Flex>
                </div>
                <List
                    itemLayout="horizontal"
                    dataSource={mockMenuData}
                    renderItem={(item) => (
                        <List.Item>
                            <Flex wrap align='center'>
                                <Checkbox
                                    checked={checkedList.includes(item)}
                                    onChange={(e) => onChange(e, item)}>
                                </Checkbox>
                                <div className="ml-2 mr-2 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 transition-transform duration-300 p-1">
                                    {item.title} - {item.url}
                                </div>
                                {item.btnS.map(btn => <Checkbox className='items-center' checked={btn.checked} onChange={(e) => btnChange(e, item, btn)}>{btn.name}</Checkbox>)}
                                <Button type="link" onClick={() => setAssignUsersOpen(true)}>
                                    分配用户
                                </Button>
                                <Button type="link" onClick={() => showModal(item)}>
                                    编辑
                                </Button>
                            </Flex>
                        </List.Item>
                    )}
                />
            </Card>
            <AssignUsersDrawer open={assignUsersDrawerOpen} onClose={() => setAssignUsersDrawerOpen(false)} onSubmit={() => setAssignUsersDrawerOpen(false)} getConfig={() => { }}></AssignUsersDrawer>
            <AssignUsersModal open={assignUsersOpen} onOk={() => assignUsersHandleOk()} onCancel={assignUsersHandleCancel} confirmLoading={assignUsersConfirmLoading}></AssignUsersModal>
            <Modal
                open={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="title"
                        label="页面名称"
                        rules={[{ required: true, message: '请输入页面名称' }]}
                    >
                        <Input placeholder="请输入页面名称" />
                    </Form.Item>
                    <Form.Item
                        name="url"
                        label="页面路径"
                        rules={[{ required: true, message: '请输入页面路径' }]}
                    >
                        <Input placeholder="请输入页面路径" />
                    </Form.Item>
                    <Form.Item
                        name="btnPermissions"
                        label="权限 Key"
                        rules={[{ required: true, message: '请输入权限 Key' }]}
                    >
                        <Input placeholder="请输入权限 Key" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )

};

export default PageManagement;