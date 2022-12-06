import React, { FunctionComponent, useState } from 'react';

interface PaginatorProps {
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
                        className={`p-3 border-violet-700 border-2 rounded-md w-14 h-14 ${selectedPage === item && 'bg-violet-800'}`}
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

export default Paginator;
