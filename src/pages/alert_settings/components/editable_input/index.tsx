import React, { ChangeEventHandler, useState } from 'react';
import { Button, Input, Typography } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { valueType } from 'antd/es/statistic/utils';

const { Title } = Typography;

interface EditableInputProps {
    value: valueType;
    submit: () => Promise<unknown>;
    onChange: ChangeEventHandler<HTMLInputElement>;
    title?: string;
}

const EditableInput: React.FC<EditableInputProps> = ({ value, onChange, submit, title = 'Editable Value' }) => {
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
                <Input
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

export default EditableInput;
