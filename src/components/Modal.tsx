import React, { FunctionComponent, useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    closeModalHandler: (state: boolean) => void;
}

const Modal: FunctionComponent<ModalProps> = (props: ModalProps) => {
    const { isOpen, closeModalHandler } = props;

    const ref = useRef<HTMLDivElement>(null);

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
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full rounded-md bg-black/40'>
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
