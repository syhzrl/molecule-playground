import React, { FunctionComponent } from 'react';

import codes from '../../assets/copy/codes';

import Card from '../../components/Card';
import Spinner from '../../components/Spinner';

import ModalCard from '../../components/ModalCard';
import DropdownCard from '../../components/DropdownCard';
import Paginator from '../../components/Paginator';

const cardList = [{
    title: 'Modal',
    code: codes.modalCode,
    component: <ModalCard />
    ,
}, {
    title: 'Dropdown',
    code: codes.dropdownCode,
    component: <DropdownCard />
    ,
}, {
    title: 'Spinner',
    code: codes.spinnerCode,
    component: <Spinner />,
}, {
    title: 'Paginator',
    code: codes.spinnerCode,
    component: <Paginator noOfPages={5} />,
}];

const HomeScreen: FunctionComponent = () => {
    return (
        <div className='flex flex-col items-center w-full h-full gap-5 p-10 overflow-x-hidden'>
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
