import React, { FunctionComponent } from 'react';

import codes from '../../assets/copy/codes';

import Card from '../../components/Card';
import Spinner from '../../components/Spinner';

const cardList = [{
    title: 'Spinner',
    code: codes.spinnerCode,
    component: <Spinner />,
}];

const HomeScreen: FunctionComponent = () => {
    return (
        <div className='flex items-start justify-center w-screen h-screen p-5'>
            {cardList.map(item => {
                const { title, code, component } = item;

                return (
                    <Card
                        title={title}
                        code={code}
                        component={component}
                    />
                );
            })}
        </div>
    );
};

export default HomeScreen;
