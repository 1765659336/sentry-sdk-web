import React, { useState } from 'react';
import './index.css';
import { useSystemStore } from '@/store';

interface FlipButtonProps {
    text: string;
    onClick: () => void;
}

const FlipButton: React.FC<FlipButtonProps> = ({ text, onClick }) => {

    const systemPrimary = useSystemStore((state) => state.systemPrimary);

    const [flipped, setFlipped] = useState(false);

    const handleMouseEnter = () => {
        if (!flipped) {
            setFlipped(true);
            setTimeout(() => {
                setFlipped(false);
            }, 2000)
        }
    };

    const handleClick = () => {
        onClick();
        setFlipped(false);
    };

    return (
        <button
            style={{ 'backgroundColor': systemPrimary }}
            className={`flip-button ${flipped ? 'flipped' : ''}`}
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
        >
            <span>{text}</span>
        </button>
    );
}

export default FlipButton;
