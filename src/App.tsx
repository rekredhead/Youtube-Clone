import Header from './components/Header';
import ExtendedNavBar from './components/ExtendedNavBar';
import MiniNavBar from './components/MiniNavBar';
import { useState } from 'react';

export default function App() {
    const [extendNavBar, setExtendNavBar] = useState(false);

    return (
        <div className="bg-zinc-900 h-screen text-white">
            <Header />
            { extendNavBar ? <ExtendedNavBar /> : <MiniNavBar /> }
        </div>
    )
}
