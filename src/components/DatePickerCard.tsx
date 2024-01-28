import React, { FunctionComponent } from 'react';
import DatePicker from './DatePicker';

const DatePickerCard: FunctionComponent = () => {
    return (
        <div className='flex items-center justify-center w-full rounded-md h-96 bg-violet-700'>
            <div className='flex flex-col gap-2'>
                <DatePicker />
            </div>
        </div>
    );
};

export default DatePickerCard;
