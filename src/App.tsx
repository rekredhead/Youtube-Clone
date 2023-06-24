import Header from './components/Header';
import ExtendedNavBar from './components/ExtendedNavBar';
import MiniNavBar from './components/MiniNavBar';
import Body from './components/Body';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from './store/darkModeReducer';
import { RootState, AppDispatch } from './store/index';

export default function App() {
    const [extendNavBar, setExtendNavBar] = useState(true);
    const toggleNavBar = () => setExtendNavBar(prevState => !prevState);

    const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
    const dispatch: AppDispatch = useDispatch();

    const handleToggleDarkMode = () => {
        dispatch(toggleDarkMode());
    };
    
    return (
        <div className={`flex h-screen overflow-hidden ${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}>
            <Header toggleNavBar={toggleNavBar} toggleDarkMode={handleToggleDarkMode} />
            <div className='double-grid w-full'>
                {extendNavBar ? <ExtendedNavBar /> : <MiniNavBar />}
                <Body />
            </div>
        </div>
    )
}
