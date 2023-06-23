import Header from './components/Header';
import ExtendedNavBar from './components/ExtendedNavBar';
import MiniNavBar from './components/MiniNavBar';
import Body from './components/Body';
import { useState } from 'react';

export default function App() {
    const [extendNavBar, setExtendNavBar] = useState(true);

    const toggleNavBar = () => setExtendNavBar(prevState => !prevState);

    return (
        <div className="flex bg-zinc-900 h-screen text-white overflow-hidden">
            <Header toggleNavBar={toggleNavBar}/>
            { extendNavBar ? <ExtendedNavBar /> : <MiniNavBar /> }
            <Body />
        </div>
    )
}
