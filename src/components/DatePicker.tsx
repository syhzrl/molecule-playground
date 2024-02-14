import React, { FunctionComponent, useState } from 'react';
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    getDay,
    isEqual,
    isSameMonth,
    parse,
    startOfToday,
    startOfWeek,
} from 'date-fns';

const colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
];

const DatePicker: FunctionComponent = () => {
    const today = startOfToday();

    const [selectedDate, setSelectedDate] = useState(today);
    const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM yyyy'));

    const firstDayCurrentMonth = parse(currentMonth, 'MMM yyyy', new Date());

    const days = eachDayOfInterval({
        start: startOfWeek(firstDayCurrentMonth),
        end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
    });

    const nextMonth = () => {
        const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM yyyy'));
    };

    const previousMonth = () => {
        const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM yyyy'));
    };

    return (
        <div className='p-4 rounded-md flex flex-col gap-2 bg-violet-800 text-white'>
            <div className='flex justify-between'>
                <p className=''>{currentMonth}</p>

                <div className='flex gap-2 items-center'>
                    <button type='button' onClick={previousMonth}>
                        {'<<'}
                    </button>

                    <button type='button' onClick={nextMonth}>
                        {'>>'}
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-7 text-xs leading-6 text-center gap-2 p-1 border-b border-b-secondary'>
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
            </div>

            <div className='grid grid-cols-7 text-sm gap-2 p-1'>
                {days.map((day) => {
                    return (
                        <p
                            // type='button'
                            key={day.toString()}
                            // onClick={() => setSelectedDate(day)}
                            className={`
                                        ${colStartClasses[getDay(day)]} 
                                        ${isSameMonth(day, firstDayCurrentMonth) ? 'text-white' : 'text-white text-opacity-40'}
                                        ${isEqual(day, today) && 'text-[#C92A2F]'}
                                        flex justify-center items-center p-1 rounded-md text-lg
                                    `}
                        >
                            <time dateTime={format(day, 'yyyy-MM-dd')}>
                                {format(day, 'd')}
                            </time>
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default DatePicker;
