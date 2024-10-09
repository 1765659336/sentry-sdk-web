import { useState } from "react";
import { Card, Col, Flex, Row, Switch, Typography, message } from "antd";
import EditableInputNumber from "./components/editable_input_number";
import EditableSelect from "./components/editable_select/indes";
import DescriptionComputer from "@/components/description_computer";
import { E_Describe_Title } from "@/components/description_computer/type";
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
            <Title level={5}>
                <Flex align="center" gap={6}>
                    <span>
                        系统是否开启接入
                    </span>
                    <DescriptionComputer title={E_Describe_Title.系统是否开启接入}></DescriptionComputer>
                </Flex>
            </Title>
            <Switch className="w-20" checkedChildren="开启" unCheckedChildren="关闭" loading={loading} checked={checked} onChange={onChange} />
        </>
    )
}

const NoticeSwitch = () => {

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
                content: checked ? '消息通知已开启' : '消息通知已关闭',
            })
        }, 2000)
    }

    return (
        <>
            {contextHolder}
            <Title level={5}>
                <Flex align="center" gap={6}>
                    <span>
                        是否开启消息通知
                    </span>
                    <DescriptionComputer title={E_Describe_Title.是否开启消息通知}></DescriptionComputer>
                </Flex>
            </Title>
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

    const [value6, setValue6] = useState<string>('2');

    const [value7, setValue7] = useState<string>('2');

    const submit = () => {
        return new Promise(res => {
            setTimeout(() => {
                messageApi.open({
                    type: 'success',
                    content: '更新成功',
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
                            <EditableInputNumber title={
                                <Flex align="center" gap={6}>
                                    <span>
                                        用户行为收集阈值
                                    </span>
                                    <DescriptionComputer title={E_Describe_Title.用户行为收集阈值}></DescriptionComputer>
                                </Flex>
                            } value={value} onChange={setValue} submit={submit}></EditableInputNumber>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card>
                            <EditableInputNumber title={
                                <Flex align="center" gap={6}>
                                    <span>
                                        点击收集阈值
                                    </span>
                                    <DescriptionComputer title={E_Describe_Title.点击收集阈值}></DescriptionComputer>
                                </Flex>
                            } value={value2} onChange={setValue2} submit={submit}></EditableInputNumber>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card>
                            <EditableInputNumber title={
                                <Flex align="center" gap={6}>
                                    <span>
                                        页面切换收集阈值
                                    </span>
                                    <DescriptionComputer title={E_Describe_Title.页面切换收集阈值}></DescriptionComputer>
                                </Flex>
                            } value={value3} onChange={setValue3} submit={submit}></EditableInputNumber>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card>
                            <EditableInputNumber title={
                                <Flex align="center" gap={6}>
                                    <span>
                                        接口请求收集阈值
                                    </span>
                                    <DescriptionComputer title={E_Describe_Title.接口请求收集阈值}></DescriptionComputer>
                                </Flex>
                            } value={value4} onChange={setValue4} submit={submit}></EditableInputNumber>
                        </Card>
                    </Col>

                </Row>
            </Card>
            <Card title="系统设置">
                <Row>
                    <Col xs={24} sm={12} md={8}>
                        <Card className="h-full">
                            <SystemSwitch></SystemSwitch>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card className="h-full">
                            <NoticeSwitch></NoticeSwitch>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card className="h-full">
                            <EditableInputNumber title={
                                <Flex align="center" gap={6}>
                                    <span>
                                        消息通知间隔
                                    </span>
                                    <DescriptionComputer title={E_Describe_Title.消息通知间隔}></DescriptionComputer>
                                </Flex>
                            } addonAfter={<>s</>} value={value5} onChange={setValue5} submit={submit}></EditableInputNumber>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card className="h-full">
                            <EditableSelect title={
                                <Flex align="center" gap={6}>
                                    <span>
                                        消息推送群聊
                                    </span>
                                    <DescriptionComputer title={E_Describe_Title.消息推送群聊}></DescriptionComputer>
                                </Flex>
                            } value={value6} options={[
                                { value: '1', label: 'OA系统沟通群' },
                                { value: '2', label: '丰恺思系统沟通群' },
                                { value: '3', label: '协作平台系统沟通群' },
                            ]} onChange={(v) => setValue6(v)} submit={submit}></EditableSelect>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card className="h-full">
                            <EditableSelect title={
                                <Flex align="center" gap={6}>
                                    <span>
                                        系统维护负责人
                                    </span>
                                    <DescriptionComputer title={E_Describe_Title.系统维护负责人}></DescriptionComputer>
                                </Flex>
                            } options={[
                                { value: '1', label: '刘杰' },
                                { value: '2', label: '周伟' },
                                { value: '3', label: '曹俊' },
                            ]} value={value7} onChange={(v) => setValue7(v)} submit={submit}></EditableSelect>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default AlertSettings;