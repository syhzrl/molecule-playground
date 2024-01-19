import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';

export enum TooltipPositionEnum {
    top,
    bottom,
    left,
    right,
}

interface TooltipProps {
    children: ReactNode;
    tooltipText: string;
    position: TooltipPositionEnum;
}

const Tooltip: FunctionComponent<TooltipProps> = (props: TooltipProps) => {
    const { children, tooltipText, position } = props;

    const [tooltipPos, setTooltipPos] = useState('');
    const [arrowPos, setArrowPos] = useState('second');

    useEffect(() => {
        switch (position) {
            case TooltipPositionEnum.top: setTooltipPos('bottom-full mb-3'); setArrowPos('top-full left-1/2 -translate-x-1/2 -translate-y-1/2'); break;
            case TooltipPositionEnum.bottom: setTooltipPos('top-full mt-3'); setArrowPos('bottom-full left-1/2 -translate-x-1/2 translate-y-1/2'); break;
            case TooltipPositionEnum.left: setTooltipPos('right-full mr-3'); setArrowPos('top-1/2 right-0 translate-x-1/2 -translate-y-1/2'); break;
            case TooltipPositionEnum.right: setTooltipPos('left-full ml-3'); setArrowPos('top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'); break;
            default: setTooltipPos('top-full mt-4'); break;
        }
    }, [position]);

    return (
        <div className='group relative flex items-center justify-center'>
            {children}

            <span className={`invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute ${tooltipPos} transition-opacity duration-300 whitespace-nowrap text-2xl bg-violet-900 p-3 rounded-md`}>
                {tooltipText}

                <div className={`absolute transform rotate-45 w-3 h-3 bg-violet-900 ${arrowPos}`} />
            </span>
        </div>
    );
};

export default Tooltip;
