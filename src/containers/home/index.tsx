import React, { FunctionComponent } from 'react';

import codes from '../../assets/copy/codes';

import Card from '../../components/Card';
import Loaders from '../../components/Loaders';

import ModalCard from '../../components/ModalCard';
import DropdownCard from '../../components/DropdownCard';
import Paginator from '../../components/Paginator';
import TooltipCard from '../../components/TooltipCard';

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
    title: 'Loaders',
    code: codes.loadersCode,
    component: <Loaders />,
}, {
    title: 'Paginator',
    code: codes.paginatorCode,
    component: <Paginator noOfPages={5} />,
}, {
    title: 'Tooltip',
    code: codes.tooltipCode,
    component: <TooltipCard />,
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
