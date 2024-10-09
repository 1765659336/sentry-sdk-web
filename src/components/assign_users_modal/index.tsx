import { Modal, ModalProps, Transfer, TransferProps } from "antd";
import { useEffect, useState } from "react";

interface RecordType {
    userCode: string;
    userName: string;
    chosen: boolean;
}

const AssignUsersModal: React.FC<ModalProps> = ({ open, onOk, confirmLoading, onCancel }) => {

    const [tData, setTData] = useState<RecordType[]>([]);

    const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>([]);

    const filterOption = (inputValue: string, option: RecordType) =>
        option.userName.indexOf(inputValue) > -1;

    const handleChange: TransferProps['onChange'] = (newTargetKeys) => {
        setTargetKeys(newTargetKeys);
    };

    const handleSearch: TransferProps['onSearch'] = (dir, value) => {
        console.log('search:', dir, value);
    };

    const getMock = () => {
        const tempTargetKeys = [];
        const tempMockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                userCode: i.toString(),
                userName: `姓名${i + 1}`,
                chosen: false,
            };
            if (data.chosen) {
                tempTargetKeys.push(data.userCode);
            }
            tempMockData.push(data);
        }
        setTData(tempMockData);
        setTargetKeys(tempTargetKeys);
    };

    useEffect(() => {
        getMock();
    }, []);

    return (
        <Modal
            title="分配用户"
            open={open}
            onOk={onOk}
            confirmLoading={confirmLoading}
            onCancel={onCancel}
            cancelText="取消"
            okText="确定"
        >
            <Transfer
                dataSource={tData}
                rowKey={(record) => record.userCode}
                showSearch
                filterOption={filterOption}
                listStyle={{
                    width: 250,
                    height: 300,
                }}
                targetKeys={targetKeys}
                onChange={handleChange}
                onSearch={handleSearch}
                render={(item) => item.userName}
            />
        </Modal>
    )
}

export default AssignUsersModal;