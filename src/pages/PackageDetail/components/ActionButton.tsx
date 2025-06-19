import React from 'react';

interface ActionButtonProps {
    text: string;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, variant = 'secondary', onClick, className = '' }) => {
    const baseStyles =
        'px-3 py-1.5 rounded text-xs font-medium transition-colors border';

    const primary = 'bg-[#343333] hover:bg-purple-dbg text-white border-purple-dbg';
    const secondary = 'bg-[#343333] hover:bg-gray-custom text-gray-300 border-purple-dbg';

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variant === 'primary' ? primary : secondary} ${className}`.trim()}
        >
            {text}
        </button>
    );
};

export default ActionButton;
