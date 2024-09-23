import { useState } from "react";
import { Card, Col, Row, Switch, Typography, message } from "antd";
import EditableInputNumber from "./components/editable_input_number";

const { Title } = Typography;

const SystemSwitch = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const [checked, setChecked] = useState(false)

    const [loading, setLoading] = useState(false)

    const onChange = async (checked: boolean) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setChecked(checked)
            messageApi.open({
                type: 'success',
                content: checked ? '系统已开启接入' : '系统已关闭接入',
            })
        }, 2000)
    }

    return (
        <>
            {contextHolder}
            <Title level={5}>系统是否开启接入</Title>
            <Switch className="w-20" checkedChildren="开启" unCheckedChildren="关闭" loading={loading} checked={checked} onChange={onChange} />
        </>
    )
}


const AlertSettings = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const [value, setValue] = useState<number | null>(50);

    const [value2, setValue2] = useState<number | null>(10);

    const [value3, setValue3] = useState<number | null>(10);

    const [value4, setValue4] = useState<number | null>(10);

    const [value5, setValue5] = useState<number | null>(30);


    const submit = () => {
        return new Promise(res => {
            setTimeout(() => {
                messageApi.open({
                    type: 'success',
                    content: '阈值更新成功',
                });
                res(true)
            }, 2000)
        })
    }

    return (
        <>
            {contextHolder}
            <Card title="采集设置" bordered={false}>
                <Row>
                    <Col xs={24} sm={12} md={8}>
                        <Card>
                            <EditableInputNumber title="用户行为收集阈值" value={value} onChange={setValue} submit={submit}></EditableInputNumber>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card>
                            <EditableInputNumber title="点击收集阈值" value={value2} onChange={setValue2} submit={submit}></EditableInputNumber>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card>
                            <EditableInputNumber title="页面切换收集阈值" value={value3} onChange={setValue3} submit={submit}></EditableInputNumber>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card>
                            <EditableInputNumber title="接口请求收集阈值" value={value4} onChange={setValue4} submit={submit}></EditableInputNumber>
                        </Card>
                    </Col>

                </Row>
            </Card>
            <Card title="系统设置">
                <Row>
                    <Col xs={24} sm={12} md={8}>
                        <Card>
                            <SystemSwitch></SystemSwitch>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card>
                            <EditableInputNumber title="消息通知间隔" addonAfter={<>s</>} value={value5} onChange={setValue5} submit={submit}></EditableInputNumber>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default AlertSettings;