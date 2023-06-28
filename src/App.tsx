import Header from './components/Header';
import ExtendedNavBar from './components/ExtendedNavBar';
import MiniNavBar from './components/MiniNavBar';
import Body from './components/Body';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/index';

export default function App() {
    const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

    const [extendNavBar, setExtendNavBar] = useState(true);
    const toggleNavBar = () => setExtendNavBar(prevState => !prevState);

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth > 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        }
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`flex h-screen overflow-hidden ${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}>
            <Header toggleNavBar={toggleNavBar} isMobile={isMobile} />
            {
                isMobile ? (
                    <>
                        <MiniNavBar />
                        <Body />
                    </>
                ) : (
                    <div className='double-grid w-full'>
                        {extendNavBar ? <ExtendedNavBar /> : <MiniNavBar />}
                        <Body />
                    </div>
                )
            }
        </div>
    )
}
