import React, { useState } from 'react';
import { Button, InputNumber, Typography } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface EditableInputNumberProps {
    value: number | null;
    submit: () => Promise<unknown>;
    onChange: (value: number | null) => void;
    min?: number;
    max?: number;
    title?: string;
}

const EditableInputNumber: React.FC<EditableInputNumberProps> = ({ value, onChange, submit, min = 10, max = 100, title = 'Editable Value' }) => {
    const [disabled, setDisabled] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    const Edit = () => {
        setIsEditing(true);
        setDisabled(false);
    };

    const Save = async () => {
        setLoading(true);
        await submit();
        setIsEditing(false);
        setDisabled(true);
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
