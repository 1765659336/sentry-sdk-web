import React, { ReactNode, useState } from 'react';
import { Button, InputNumber, Typography } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface EditableInputNumberProps {
    value: number | null;
    submit: () => Promise<unknown>;
    onChange: (value: number | null) => void;
    addonAfter?: React.ReactNode;
    min?: number;
    max?: number;
    title?: ReactNode;
}

const EditableInputNumber: React.FC<EditableInputNumberProps> = ({ value, onChange, submit, min = 10, max = 100, addonAfter = null, title = 'Editable Value' }) => {
    const [disabled, setDisabled] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    const Edit = () => {
        setIsEditing(true);
        setDisabled(false);
    };

    const Save = async () => {
        setLoading(true);
        setDisabled(true);
        await submit();
        setIsEditing(false);
        setLoading(false);
    };

    return (
        <>
            <Title level={5}>{title}</Title>
            <div className="flex items-center">
                <InputNumber
                    min={min}
                    max={max}
                    disabled={disabled}
                    value={value}
                    addonAfter={addonAfter}
                    onChange={onChange}
                />
                <div className='cursor-pointer ml-2'>
                    <Button
                        loading={loading}
                        icon={isEditing ? <SaveOutlined onClick={Save} /> : <EditOutlined onClick={Edit} />}
                    />
                </div>
            </div>
        </>
    );
};

export default EditableInputNumber;
