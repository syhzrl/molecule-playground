import React, { FunctionComponent } from 'react';

const Spinner: FunctionComponent = () => {
    return (
        <div className='w-40 h-40 border-8 border-solid rounded-full border-violet-700/40 border-t-violet-700 animate-spin' />
    );
};

export default Spinner;
