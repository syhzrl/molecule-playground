import React, { FunctionComponent } from 'react';

const Loaders: FunctionComponent = () => {
    return (
        <div className='flex items-center justify-center w-full rounded-md h-96 bg-transparent gap-10'>
            <div className='w-40 h-40 border-8 border-solid rounded-full border-violet-700/40 border-t-violet-700 animate-spin' />

            <div className='bg-violet-700 p-4 rounded-md h-80 w-60 flex flex-col justify-between'>
                <div className='w-full bg-violet-900 h-1/2 rounded-md animate-pulse' />

                <div className='w-full flex flex-col gap-2'>
                    <div className='w-full bg-violet-900 h-8 rounded-md animate-pulse' />
                    <div className='w-full bg-violet-900 h-8 rounded-md animate-pulse' />
                    <div className='w-full bg-violet-900 h-8 rounded-md animate-pulse' />
                </div>
            </div>

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

export default Loaders;
