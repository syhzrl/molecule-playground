import React, { FunctionComponent, useState } from 'react';

import CodeBlock from './CodeBlock';

enum SelectedModeEnum {
    component,
    code,
}

interface CardProps {
    title: string;
    code: string;
    component: JSX.Element;
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
    const { title, code, component } = props;

    const [selectedMode, setSelectedMode] = useState<SelectedModeEnum>(SelectedModeEnum.component);

    const renderCompOrCode = () => {
        if (selectedMode === SelectedModeEnum.code) {
            return (
                <CodeBlock
                    code={code}
                />
            );
        }

        return component;
    };

    return (
        <div className='flex flex-col w-full gap-2 p-4 rounded-md bg-black-secondary'>
            <p className='text-2xl'>
                {title}
            </p>

            <div className='flex flex-col items-center justify-center w-full h-full gap-2'>
                <div className='flex items-center justify-end w-full h-full gap-2 bg-transparent rounded-md'>
                    <button
                        type='button'
                        onClick={() => setSelectedMode(SelectedModeEnum.component)}
                        className={`text-2xl p-1 duration-150 hover:text-violet-500 ${selectedMode === SelectedModeEnum.component ? 'text-violet-700' : 'text-white'}`}
                    >
                        Component
                    </button>

                    <button
                        type='button'
                        onClick={() => setSelectedMode(SelectedModeEnum.code)}
                        className={`text-2xl p-1 duration-150 hover:text-violet-500 ${selectedMode === SelectedModeEnum.code ? 'text-violet-700' : 'text-white'}`}
                    >
                        Code
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center w-full h-full p-4 rounded-md bg-black-primary'>
                    {renderCompOrCode()}
                </div>
            </div>
        </div>
    );
};

export default Card;
