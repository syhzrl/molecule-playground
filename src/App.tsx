import React, { FunctionComponent } from 'react';
import NavMenu from './components/NavMenu';
import HomeScreen from './containers/home';

const App: FunctionComponent = () => {
    return (
        <div className='flex'>
            <NavMenu />
            <HomeScreen />
        </div>
    );
};

export default App;
