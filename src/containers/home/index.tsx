import React, { FunctionComponent } from 'react';

import codes from '../../assets/copy/codes';

import Card from '../../components/Card';
import Spinner from '../../components/Spinner';
import ModalCard from '../../components/ModalCard';

const cardList = [{
    title: 'Modal',
    code: codes.modalCode,
    component: <ModalCard />
    ,
}, {
    title: 'Spinner',
    code: codes.spinnerCode,
    component: <Spinner />,
}];

const HomeScreen: FunctionComponent = () => {
    return (
        <div className='flex flex-col items-center w-screen h-screen gap-5 p-5'>
            {cardList.map(item => {
                const { title, code, component } = item;

                return (
                    <Card
                        key={title}
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
