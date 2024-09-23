import { useSystemStore } from "@/store";
import { BorderOutlined, MergeCellsOutlined, SplitCellsOutlined } from "@ant-design/icons";
import { Badge, Card, Col, ColorPicker, Flex, Row } from "antd";

const options: { label: string, value: 'small' | 'middle' | 'large', icon: JSX.Element }[] = [
    { label: '紧凑', value: 'small', icon: <MergeCellsOutlined /> },
    { label: '默认', value: 'middle', icon: <BorderOutlined /> },
    { label: '宽松', value: 'large', icon: <SplitCellsOutlined /> },
];

const SystemSetting = () => {
    const systemPrimary = useSystemStore((state) => state.systemPrimary);

    const setSystemPrimary = useSystemStore((state) => state.setSystemPrimary);

    const systemSize = useSystemStore((state) => state.systemSize);

    const setSystemSize = useSystemStore((state) => state.setSystemSize);

    const systemFontFamily = useSystemStore((state) => state.systemFontFamily);

    const setSystemFontFamily = useSystemStore((state) => state.setSystemFontFamily);


    return (
        <div>
            <Card title="切换系统主题色">
                <ColorPicker showText={(value) => '自定义颜色' + value.toHexString()} value={systemPrimary} onChange={(color) => setSystemPrimary(color.toHexString())} />
                <Flex wrap gap={4}>
                    <div onClick={() => setSystemPrimary('#1B82FA')}>
                        <ColorPicker open={false} showText={() => '柔和蓝色'} value='#1B82FA' />
                    </div>
                    <div onClick={() => setSystemPrimary('#D6CDAF')}>
                        <ColorPicker open={false} showText={() => '温暖米色'} value='#D6CDAF' />
                    </div>
                    <div onClick={() => setSystemPrimary('#4CAF50')}>
                        <ColorPicker open={false} showText={() => '自然绿色'} value='#4CAF50' />
                    </div>
                    <div onClick={() => setSystemPrimary('#9B59B6')}>
                        <ColorPicker open={false} showText={() => '优雅紫色'} value='#9B59B6' />
                    </div>
                    <div onClick={() => setSystemPrimary('#7D7D7D')}>
                        <ColorPicker open={false} showText={() => '冷静灰色'} value='#7D7D7D' />
                    </div>
                </Flex>
            </Card>
            <Card title="切换系统布局">
                <Row gutter={16}>
                    {options.map((option) => (
                        <Col span={8} key={option.value}>
                            <Badge.Ribbon text={systemSize === option.value ? '√' : ''}>
                                <Card
                                    onClick={() => setSystemSize(option.value)}
                                    style={{
                                        cursor: 'pointer',
                                    }}
                                >
                                    <div style={{ textAlign: 'center', fontSize: '18px' }}>
                                        {option.icon}
                                        <div>{option.label}</div>
                                    </div>
                                </Card>
                            </Badge.Ribbon>
                        </Col>
                    ))}
                </Row>
            </Card>
            <Card title="切换系统字体">
                <Row gutter={8}>
                    <Col span={12}>
                        <Badge.Ribbon text={"caveat" === systemFontFamily ? '√' : ''}>
                            <Card className="cursor-pointer" onClick={() => setSystemFontFamily("caveat")}>
                                <div style={{ 'fontFamily': "'Caveat', cursive" }}>
                                    字体
                                    family
                                </div>
                            </Card>
                        </Badge.Ribbon>
                    </Col>
                    <Col span={12}>
                        <Badge.Ribbon text={"default" === systemFontFamily ? '√' : ''}>
                            <Card className="cursor-pointer" onClick={() => setSystemFontFamily("default")}>
                                <div style={{ 'fontFamily': 'Arial, Helvetica, sans-serif' }}>
                                    字体
                                    family
                                </div>
                            </Card>
                        </Badge.Ribbon>
                    </Col>
                </Row>
            </Card >
        </div >
    )
}

export default SystemSetting;