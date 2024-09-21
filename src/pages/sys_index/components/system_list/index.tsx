import { useSystemStore } from "@/store";
import { ApiOutlined } from "@ant-design/icons";
import { Badge } from "antd";

interface SystemItemProps {
    name: string;
    status: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

const statusStyles: { [k: string]: string } = {
    active: 'border-green-500 bg-green-100 text-green-700',
    warning: 'border-orange-500 bg-orange-100 text-orange-700',
    danger: 'border-red-500 bg-red-100 text-red-700',
};

const SystemItem: React.FC<SystemItemProps> = ({ name, status, icon, selected, onClick }) => {


    return (
        <div
            className={`flex items-center p-2 mb-4 rounded-lg border cursor-pointer ${statusStyles[status]} ${selected ? 'shadow-lg border-blue-500 border-2' : ''
                }`}
            onClick={onClick}
        >
            <img src={icon} alt={name} className="w-10 h-10 mr-4" />
            <div className="flex-1">
                <h3 className="text-sm font-semibold">{name}</h3>
                <p className="text-sm">
                    {status === 'active' ? '健康' : status === 'warning' ? '警告' : '危险'}
                </p>
            </div>
        </div>
    );
};


const systems = [
    { id: '1', name: '丰恺思系统', status: 'active', icon: 'https://via.placeholder.com/40' },
    { id: '2', name: '协作平台', status: 'warning', icon: 'https://via.placeholder.com/40' },
    { id: '3', name: 'OA系统', status: 'danger', icon: 'https://via.placeholder.com/40' },
];

const SystemList: React.FC = () => {

    const setSystemUid = useSystemStore((state) => state.setSystemUid);

    const systemUid = useSystemStore((state) => state.systemUid);

    const handleItemClick = (id: string) => {
        setSystemUid(id);
    };

    return (
        <div>
            {systems.map(system => (
                <>
                    {system.id === systemUid ? <Badge.Ribbon text={<ApiOutlined />}>
                        <SystemItem
                            key={system.id}
                            name={system.name}
                            status={system.status}
                            icon={system.icon}
                            selected={system.id === systemUid}
                            onClick={() => handleItemClick(system.id)}
                        />
                    </Badge.Ribbon> : <SystemItem
                        key={system.id}
                        name={system.name}
                        status={system.status}
                        icon={system.icon}
                        selected={system.id === systemUid}
                        onClick={() => handleItemClick(system.id)}
                    />}
                </>
            ))}
        </div>
    );
};

export default SystemList;