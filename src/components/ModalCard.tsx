import React, { FunctionComponent, useState } from 'react';

import Modal from './Modal';

const ModalCard: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative flex items-center justify-center w-full rounded-md h-96 bg-violet-700'>
            <button
                type='button'
                onClick={() => setIsOpen(true)}
                className='p-4 text-xl duration-150 rounded-md bg-violet-800 hover:scale-110 outline-none'
            >
                Click me to open the modal
            </button>

            <Modal
                isOpen={isOpen}
                closeModalHandler={() => setIsOpen(false)}
            />
        </div>
    );
};

export default ModalCard;
