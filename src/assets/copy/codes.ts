const loadersCode = `const Loaders: FunctionComponent = () => {
    return (
        <div className='flex items-center justify-center w-full rounded-md h-96 bg-transparent gap-10'>
            // Spinner
            <div className='w-40 h-40 border-8 border-solid rounded-full border-violet-700/40 border-t-violet-700 animate-spin' />

            // Card Loader #1
            <div className='bg-violet-700 p-4 rounded-md h-80 w-60 flex flex-col justify-between'>
                <div className='w-full bg-violet-900 h-1/2 rounded-md animate-pulse' />

                <div className='w-full flex flex-col gap-2'>
                    <div className='w-full bg-violet-900 h-8 rounded-md animate-pulse' />
                    <div className='w-full bg-violet-900 h-8 rounded-md animate-pulse' />
                    <div className='w-full bg-violet-900 h-8 rounded-md animate-pulse' />
                </div>
            </div>

            // Card Loader #2
            <div className='bg-violet-700 p-4 rounded-md h-60 w-80 flex flex-col justify-center items-center gap-4'>

                <div className='flex justify-between items-center gap-6 w-full'>
                    <div className='bg-violet-900 animate-pulse w-[30%] h-20 rounded-full' />

                    <div className='w-[70%] flex flex-col gap-2'>
                        <div className='w-full bg-violet-900 h-4 rounded-md animate-pulse' />
                        <div className='w-full bg-violet-900 h-4 rounded-md animate-pulse' />
                    </div>
                </div>

                <div className='w-full bg-violet-900 h-4 rounded-md animate-pulse' />
                <div className='w-full bg-violet-900 h-4 rounded-md animate-pulse' />
                <div className=' bg-violet-900 h-4 rounded-md animate-pulse w-4/5 self-start' />
            </div>
        </div>
    );
};

export default Loaders;`;

const modalCode = `interface ModalProps {
    isOpen: boolean;
    closeModalHandler: (state: boolean) => void;
}

const Modal: FunctionComponent<ModalProps> = (props: ModalProps) => {
    const { isOpen, closeModalHandler } = props;

    const ref = useRef<HTMLDivElement>(null);

    // This useEffect handles closing when clicked outside and also closing when the Escape key is pressed
    useEffect(() => {
        const handleClick = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                closeModalHandler(false);
            }
        };

        document.addEventListener('click', handleClick, true);
        document.addEventListener('keydown', hideDropdownKeyboardHandler, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
            document.addEventListener('keydown', hideDropdownKeyboardHandler, true);
        };
    }, [ref, closeModalHandler]);

    const hideDropdownKeyboardHandler = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            event.preventDefault();
            closeModalHandler(false);
        }
    };

    if (!isOpen) return null;

    return (
        // This outer div is the backdrop
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full rounded-md bg-black/40'>
            // This inner div is the card inside the backdrop
            <div
                ref={ref}
                className='flex flex-col items-center justify-center gap-5 p-4 text-xl text-black bg-white rounded-md'
            >
                <div className='flex flex-col items-center justify-center'>
                    <p>
                        Are you sure you want to keep this modal opened?
                    </p>

                    <p className='text-lg text-black/60'>
                        you can also click the backdrop to close this modal
                    </p>
                </div>

                <div className='flex w-full gap-5'>
                    <button
                        type='button'
                        onClick={() => closeModalHandler(false)}
                        className='w-1/2 p-3 text-xl text-white duration-150 rounded-md bg-violet-800 hover:scale-110'
                    >
                        Yes
                    </button>

                    <button
                        type='button'
                        onClick={() => closeModalHandler(false)}
                        className='w-1/2 p-3 text-xl text-white duration-150 rounded-md bg-violet-800 hover:scale-110'
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

// Modal Parent
// Can be any parent component
const ModalParent: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // position relative here just for the example, the parent doesnt have to be relative since the modal would fit the whole screen
        <div className='relative flex items-center justify-center w-full rounded-md h-60 bg-violet-700'>
            <button
                type='button'
                onClick={() => setIsOpen(true)}
                className='p-4 text-xl rounded-md bg-violet-800'
            >
                Click me to open the modal
            </button>

            <Modal
                isOpen={isOpen}
                closeModalHandler={() => setIsOpen(false)}
            />
        </div>
    );
};`;

const dropdownCode = `interface DropdownAbsoluteProps {
    setSelectedItem: (selectedItem: string) => void;
}

const buttonList = ['Dropdown Item #1', 'Dropdown Item #2', 'Dropdown Item #3'];

const DropdownAbsolute: FunctionComponent<DropdownAbsoluteProps> = (props: DropdownAbsoluteProps) => {
    const { setSelectedItem } = props;

    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    // This useEffect handles closing when clicked outside and also closing when the Escape key is pressed
    useEffect(() => {
        const handleClick = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClick, true);
        document.addEventListener('keydown', hideDropdownKeyboardHandler, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
            document.addEventListener('keydown', hideDropdownKeyboardHandler, true);
        };
    }, [ref, setIsOpen]);

    const hideDropdownKeyboardHandler = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            event.preventDefault();
            setIsOpen(false);
        }
    };

    const dropDownItemClickHandler = (event: MouseEvent, value: string) => {
        setSelectedItem(value);
        setIsOpen(false);
        event.stopPropagation();
    };

    return (
        <div
            ref={ref}
            className='flex flex-col items-center relative w-fit'
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='p-4 text-xl duration-150 rounded-md bg-violet-800 hover:bg-violet-900 outline-none'
            >
                Click Me! ( my children are absolute )
            </button>

            {isOpen && (
                <div className='absolute top-full mt-2 whitespace-nowrap p-4 flex flex-col gap-2 bg-white rounded-md w-full transition-opacity duration-150'>
                    {buttonList.map(item => {
                        return (
                            <button
                                key={item}
                                type='button'
                                onClick={(event) => dropDownItemClickHandler(event, item)}
                                className='bg-violet-800 p-3 text-xl rounded-md hover:bg-violet-900 transition-colors duration-150'
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default DropdownAbsolute;`;

const paginatorCode = `interface PaginatorProps {
    noOfPages: number;
}

const Paginator: FunctionComponent<PaginatorProps> = (props: PaginatorProps) => {
    const { noOfPages } = props;
    const [selectedPage, setSelectedPage] = useState(1);

    const pages = [];

    for (let i = 0; i < noOfPages; i += 1) {
        pages.push(i + 1);
    }

    const prevClickHandler = () => {
        if (selectedPage === 1) {
            return;
        }

        setSelectedPage(prev => prev - 1);
    };

    const nextClickHandler = () => {
        if (selectedPage === noOfPages) {
            return;
        }

        setSelectedPage(prev => prev + 1);
    };

    return (
        <div className='flex gap-3'>
            <button
                type='button'
                onClick={() => setSelectedPage(1)}
                className='p-3 bg-violet-700 rounded-md hover:bg-violet-800 transition-colors duration-150'
            >
                Start
            </button>
            <button
                type='button'
                onClick={prevClickHandler}
                className='p-3 bg-violet-700 rounded-md hover:bg-violet-800 transition-colors duration-150'
            >
                Prev
            </button>

            {pages.map((item) => {
                return (
                    <button
                        key={item}
                        type='button'
                        onClick={() => setSelectedPage(item)}
                        className={\`p-3 border-violet-700 border-2 rounded-md w-14 h-14 \${selectedPage === item && 'bg-violet-800'}\`}
                    >
                        {item}
                    </button>
                );
            })}

            <button
                type='button'
                onClick={nextClickHandler}
                className='p-3 bg-violet-700 rounded-md hover:bg-violet-800 transition-colors duration-150'
            >
                Next
            </button>
            <button
                type='button'
                onClick={() => setSelectedPage(noOfPages)}
                className='p-3 bg-violet-700 rounded-md hover:bg-violet-800 transition-colors duration-150'
            >
                End
            </button>
        </div>
    );
};

export default Paginator;`;

const tooltipCode = `export enum TooltipPositionEnum {
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
            default: setTooltipPos('top-full mt-4'); setArrowPos('bottom-full left-1/2 -translate-x-1/2 translate-y-1/2'); break;
        }
    }, [position]);

    return (
        <div className='group relative flex items-center justify-center'>
            {children}

            <span className={\`invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute \${tooltipPos} transition-opacity duration-300 whitespace-nowrap text-2xl bg-violet-900 p-3 rounded-md\`}>
                {tooltipText}

                <div className={\`absolute transform rotate-45 w-3 h-3 bg-violet-900 \${arrowPos}\`} />
            </span>
        </div>
    );
};

export default Tooltip;

//Tooltip usage
<Tooltip
    tooltipText='Im on the right!'
    position={TooltipPositionEnum.right}
>
    <p className='text-2xl bg-violet-800 p-4 rounded-md'>
        Hover over me!
    </p>
</Tooltip>`;

const datePickerCode = `import React, { FunctionComponent, useState } from 'react';
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
                <p className='font-bold'>{currentMonth}</p>

                <div className='flex gap-2 items-center'>
                    <button type='button' onClick={previousMonth}>
                        prev
                    </button>

                    <button type='button' onClick={nextMonth}>
                        next
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-7 text-xs leading-6 text-center gap-2 p-1 font-bold border-b border-b-secondary'>
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
                        <button
                            type='button'
                            key={day.toString()}
                            onClick={() => setSelectedDate(day)}
                            className={\`
                                        \${colStartClasses[getDay(day)]} 
                                        \${isSameMonth(day, firstDayCurrentMonth) ? 'text-white' : 'text-white text-opacity-40'}
                                        \${isEqual(day, today) && 'text-white bg-violet-700'}
                                        \${isEqual(day, selectedDate) && 'text-white bg-violet-900'}
                                        flex justify-center items-center p-1 rounded-md text-lg
                                        hover:bg-violet-700 hover:text-white
                                    \`}
                        >
                            <time dateTime={format(day, 'yyyy-MM-dd')}>
                                {format(day, 'd')}
                            </time>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default DatePicker;`;

export default {
    loadersCode,
    modalCode,
    dropdownCode,
    paginatorCode,
    tooltipCode,
    datePickerCode,
};
