const spinnerCode = `import React, { FunctionComponent } from 'react';
    
const Spinner: FunctionComponent = () => {
    return (
        <div className='w-40 h-40 border-8 border-solid rounded-full border-violet-700 border-t-violet-700/50 animate-spin' />
    );
};

export default Spinner;`;

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

export default {
    spinnerCode,
    modalCode,
    dropdownCode,
};
