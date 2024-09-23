import { Card } from 'antd';
import axios from 'axios';
import { isArray } from 'lodash-unified';
import { useEffect, useState, useRef } from 'react';
import rrwebPlayer from 'rrweb-player';
import 'rrweb-player/dist/style.css';
import { useNavigate, useParams } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';

const SystemErrorDetailRrwebUrl = () => {
    const { rrwebUrl } = useParams();
    const navigator = useNavigate();
    const [pageLoading, setPageLoading] = useState(false);
    const playerRef = useRef(null);
    const [playerInstance, setPlayerInstance] = useState<rrwebPlayer | null>(null);

    const fn = async () => {
        setPageLoading(true);
        const response = await axios.get(`http://218.77.107.37:49000/${String(rrwebUrl).replace(/_/g, '/')}`, {
            responseType: 'text',
        });
        const text = response.data;
        setPageLoading(false);
        setTimeout(() => {
            if (playerRef.current && text && isArray(JSON.parse(text))) {
                setPlayerInstance(new rrwebPlayer({
                    target: playerRef.current,
                    data: { events: JSON.parse(text), width: window.innerWidth - 64 },
                }));
            }
        }, 300)
    };


    useEffect(() => {
        fn();
        return () => {
            playerInstance?.getReplayer?.destroy();
        };
    }, []);

    return (
        <Card loading={pageLoading} extra={<CloseOutlined onClick={() => navigator(-1)} />}>
            <div>
                <div ref={playerRef}></div>
            </div>
        </Card>
    );
};

export default SystemErrorDetailRrwebUrl;