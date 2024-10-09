import { Button, Checkbox, Drawer, DrawerProps, List } from "antd";

const AssignUsersDrawer: React.FC<DrawerProps & { onSubmit: () => void; getConfig: () => void }> = ({ open, onClose, onSubmit, getConfig }) => {

    return (
        <Drawer title="用户列表" onClose={onClose} open={open}>
            <div className='flex justify-between items-center mb-4'>
                <Checkbox>全选/全不选</Checkbox>
                <Button type="primary" onClick={onSubmit}>
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
                            <Button onClick={getConfig}>
                                获取配置
                            </Button>
                        </div>
                    </List.Item>
                )}
            />
        </Drawer>
    )
}

export default AssignUsersDrawer;