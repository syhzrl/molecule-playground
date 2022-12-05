import React, { FunctionComponent, useState, useEffect, useRef, MouseEvent } from 'react';

interface DropdownAbsoluteProps {
    setSelectedItem: (selectedItem: string) => void;
}

const buttonList = ['Dropdown Item #1', 'Dropdown Item #2', 'Dropdown Item #3'];

const DropdownAbsolute: FunctionComponent<DropdownAbsoluteProps> = (props: DropdownAbsoluteProps) => {
    const { setSelectedItem } = props;

    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

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

export default DropdownAbsolute;
