import React, { FunctionComponent, useState } from 'react';

const Carousel: FunctionComponent = () => {
    const images = [
        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_15.jpg',
        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);

    const prevClickHandler = () => {
        if (selectedIndex === 0) {
            setSelectedIndex(images.length - 1);
            return;
        }

        setSelectedIndex(prev => prev - 1);
    };

    const nextClickHandler = () => {
        if (selectedIndex === images.length - 1) {
            setSelectedIndex(0);
            return;
        }

        setSelectedIndex(prev => prev + 1);
    };

    return (
        <div className='overflow-hidden relative w-[600px] h-full'>
            <div
                className='flex transition-transform ease-out duration-500'
                style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
            >
                {images.map((img) => (
                    <img src={img} alt='' className='h-auto w-[600px] object-contain rounded-lg' />
                ))}
            </div>

            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button
                    onClick={prevClickHandler}
                    className='flex items-center p-2 rounded-full shadow bg-violet-800 text-white hover:bg-violet-900'
                >
                    {'<'}
                </button>
                <button
                    onClick={nextClickHandler}
                    className='flex items-center p-2 rounded-full shadow bg-violet-800 text-white hover:bg-violet-900'
                >
                    {'>'}
                </button>
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {images.map((_, i) => {
                        return (
                            <div
                                className={`transition-all w-3 h-3 bg-violet-700 rounded-full ${selectedIndex === i ? 'p-2' : 'bg-opacity-50'}`}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
