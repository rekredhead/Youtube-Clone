import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../store/darkModeReducer";
import { RootState, AppDispatch } from "../store";

type HeaderButtonProps = {
    title: string;
    icon: string;
    onclick?: any;
}
function HeaderButton({title, icon, onclick}: HeaderButtonProps) {
    const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

    return (
        <button
            onClick={onclick}
            className={`flex rounded-full h-10 w-10 justify-center items-center ${darkMode ? 'hover:bg-zinc-700' : 'hover:bg-zinc-300'}`}
            title={title}
        >
            <span className="material-symbols-outlined text-[28px]">{icon}</span>
        </button>
    );
}

export default function Header({toggleNavBar}: any) {
    const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
    const dispatch: AppDispatch = useDispatch();

    const handleToggleDarkMode = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <header className="flex fixed top-0 left-0 right-0 items-center px-5 justify-between h-14">
            <div className="flex items-center gap-4">
                <HeaderButton onclick={toggleNavBar} title="Toggle Menu" icon="menu" />
                <div className="flex items-center">
                    <img src="./images/youtube.svg" alt='Youtube Logo' width='32px' />
                    <h1 className="font-bold text-xl font-sans">YouTube</h1>
                </div>
            </div>
            
            <div className="flex items-center w-2/5 gap-3 justify-center">
                <div
                    className={`flex items-center rounded-full overflow-hidden h-10 w-full border ${darkMode ? 'border-zinc-700' : 'border-zinc-300'}`}
                >
                    <input type="search" className="px-5 w-full h-full bg-transparent outline-none" placeholder="Search" />
                    <button
                        className={`flex w-16 h-full justify-center items-center ${darkMode ? 'bg-zinc-700' : 'bg-zinc-300'}`}
                        title="Search"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            search
                        </span>
                    </button>
                </div>
                <HeaderButton title="Search with voice" icon="mic" />
            </div>

            <div className="flex items-center gap-3">
                <HeaderButton onclick={handleToggleDarkMode} title="Toggle Dark Mode" icon="dark_mode" />
                <HeaderButton title="Create" icon="emergency_recording" />
                <HeaderButton title="Notification" icon="notifications" />
                <button className="bg-purple-500 h-8 w-8 text-lg text-white font-semibold rounded-full" title="Profile">K</button>
            </div>
        </header>
    );
}