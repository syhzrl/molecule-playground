import React, { FunctionComponent, useState } from 'react';
import Dropdown from './Dropdown';

const DropdownCard: FunctionComponent = () => {
    const [absoluteSelected, setAbsoluteSelected] = useState('');

    return (
        <div className='flex items-center justify-center w-full rounded-md h-96 bg-violet-700'>
            <div className='flex flex-col gap-2'>
                <p className='text-xl'>
                    {`Selected Item: ${absoluteSelected}`}
                </p>

                <Dropdown
                    setSelectedItem={setAbsoluteSelected}
                />
            </div>
        </div>
    );
};

export default DropdownCard;
