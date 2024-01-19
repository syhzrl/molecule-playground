import React, { FunctionComponent } from 'react';

interface NavMenuButtonProps {
    label: string;
}

const NavMenuButton: FunctionComponent<NavMenuButtonProps> = (props: NavMenuButtonProps) => {
    const { label } = props;

    return (
        <button
            type='button'
            className='w-full p-3 text-xl duration-150 rounded-md bg-violet-800 hover:bg-violet-900 hover:text-2xl'
        >
            {label}
        </button>
    );
};

const NavMenu: FunctionComponent = () => {
    const navButtonsList = [
        'Modal',
        'Dropdown',
        'Spinner',
        'Paginator',
        'Tooltip',
    ];

    return (
        <div className='flex flex-col items-center justify-between w-1/5 gap-10 p-4 bg-violet-700 sticky top-0 h-screen'>
            <p className='text-2xl font-bold'>
                Molecule Playground
            </p>

            <div className='flex flex-col w-full h-full gap-3'>
                {navButtonsList.map(item => {
                    return (
                        <NavMenuButton
                            key={item}
                            label={item}
                        />
                    );
                })}
            </div>

            <p className='text-white/50'>
                v.1.0.0
            </p>
        </div>
    );
};

export default NavMenu;
