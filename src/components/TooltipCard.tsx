import React, { FunctionComponent } from 'react';
import Tooltip, { TooltipPositionEnum } from './Tooltip';

const TooltipCard: FunctionComponent = () => {
    return (
        <div className='flex items-center justify-center w-full rounded-md h-96 bg-violet-700 gap-10'>
            <div className='flex flex-col items-center justify-center w-full rounded-md h-96 gap-20'>
                <Tooltip
                    tooltipText='Im on the right!'
                    position={TooltipPositionEnum.right}
                >
                    <p className='text-2xl bg-violet-800 p-4 rounded-md'>
                        Hover over me!
                    </p>
                </Tooltip>

                <Tooltip
                    tooltipText='Im on the top!'
                    position={TooltipPositionEnum.top}
                >
                    <p className='text-2xl bg-violet-800 p-4 rounded-md'>
                        Hover over me!
                    </p>
                </Tooltip>
            </div>

            <div className='flex flex-col items-center justify-center w-full rounded-md h-96 gap-20'>
                <Tooltip
                    tooltipText='Im on the bottom!'
                    position={TooltipPositionEnum.bottom}
                >
                    <p className='text-2xl bg-violet-800 p-4 rounded-md'>
                        Hover over me!
                    </p>
                </Tooltip>

                <Tooltip
                    tooltipText='Im on the left!'
                    position={TooltipPositionEnum.left}
                >
                    <p className='text-2xl bg-violet-800 p-4 rounded-md'>
                        Hover over me!
                    </p>
                </Tooltip>
            </div>
        </div>
    );
};

export default TooltipCard;
