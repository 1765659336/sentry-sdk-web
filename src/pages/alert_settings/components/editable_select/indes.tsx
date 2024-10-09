import React, { ReactNode, useState } from 'react';
import { Button, Select, SelectProps, Typography } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface EditableSelectProps {
    value: SelectProps['value'];
    submit: () => Promise<unknown>;
    onChange: SelectProps['onChange'];
    options: SelectProps['options'];
    title?: ReactNode;
}

const EditableSelect: React.FC<EditableSelectProps> = ({ value, onChange, submit, title = 'Editable Value', options }) => {
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
                <Select
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    options={options}
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

export default EditableSelect;
