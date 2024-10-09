import { QuestionCircleOutlined } from "@ant-design/icons";
import { Tooltip, TooltipProps } from "antd";

type T_Description_Computer_Props = TooltipProps;

const DescriptionComputer: React.FC<T_Description_Computer_Props> = (props) => {
    return (
        <Tooltip {...props}>
            <QuestionCircleOutlined className='cursor-pointer' />
        </Tooltip>
    )
}

export default DescriptionComputer;
