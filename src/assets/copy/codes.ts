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

    if (!isOpen) return null;

    return (
        // This outer div is the translucent backdrop, hence the position absolute
        <div
            className='absolute top-0 left-0 flex items-center justify-center w-full h-full rounded-md bg-black/40'
            onClick={() => closeModalHandler(false)}
        >
            // Here is the modal content, can be abstracted as the children to the backdrop
            <div className='flex flex-col items-center justify-center gap-5 p-4 text-xl text-black bg-white rounded-md'>
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
                        className='w-1/2 p-3 text-xl text-white rounded-md bg-violet-800'
                    >
                        Yes
                    </button>

                    <button
                        type='button'
                        onClick={() => closeModalHandler(false)}
                        className='w-1/2 p-3 text-xl text-white rounded-md bg-violet-800'
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

export default {
    spinnerCode,
    modalCode,
};
