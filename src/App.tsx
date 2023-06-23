import Header from './components/Header';
import ExtendedNavBar from './components/ExtendedNavBar';
import MiniNavBar from './components/MiniNavBar';
import Body from './components/Body';
import { useState } from 'react';

export default function App() {
    const [extendNavBar, setExtendNavBar] = useState(true);
    const [darkMode, setDarkMode] = useState(true);

    const toggleNavBar = () => setExtendNavBar(prevState => !prevState);
    const toggleDarkMode = () => setDarkMode(prevState => !prevState);

    return (
        <div className={`flex h-screen overflow-hidden ${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}>
            <Header toggleNavBar={toggleNavBar} toggleDarkMode={toggleDarkMode} />
            <div className='double-grid w-full'>
                {extendNavBar ? <ExtendedNavBar /> : <MiniNavBar />}
                <Body />
            </div>
        </div>
    )
}
