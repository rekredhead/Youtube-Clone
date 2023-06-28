import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../store/darkModeReducer";
import { RootState, AppDispatch } from "../store";
import { useState } from "react";

type HeaderButtonProps = {
   title: string;
   icon: string;
   onclick?: any;
}
function HeaderButton({ title, icon, onclick }: HeaderButtonProps) {
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

export default function Header({ toggleNavBar, isMobile }: any) {
   const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
   const dispatch: AppDispatch = useDispatch();

   const [showSearch, setShowSearch] = useState<boolean>(false);
   const handleShowSearch = () => setShowSearch(true);
   const handleSearchBlur = () => setShowSearch(false);

   const handleToggleDarkMode = () => {
      dispatch(toggleDarkMode());
   };

   const renderSearchBar = () => {
      return (
         <div className="flex items-center w-2/5 gap-3 justify-center max-md:w-full">
            <div className={`flex items-center rounded-full overflow-hidden h-10 w-full border ${darkMode ? 'border-zinc-700' : 'border-zinc-300'}`} >
               <input
                  onBlur={isMobile ? handleSearchBlur : undefined}
                  autoFocus={isMobile}
                  type="search"
                  className="px-5 w-full h-full bg-transparent outline-none"
                  placeholder="Search"
               />
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
      );
   }

   return (
      <header className="flex fixed top-0 left-0 right-0 items-center px-5 justify-between h-14 max-md:h-12">
         {
            !showSearch &&
            <div className="flex items-center gap-4">
               {!isMobile && <HeaderButton onclick={toggleNavBar} title="Toggle Menu" icon="menu" />}
               <div className="flex items-center">
                  <img className="w-8" src="./images/youtube.svg" alt='Youtube Logo' />
                  <h1 className="font-bold text-xl max-md:text-lg font-sans">YouTube</h1>
               </div>
            </div>
         }
         {isMobile ? (showSearch && renderSearchBar()) : renderSearchBar()}
         {
            !showSearch &&
            <div className="flex items-center gap-3 max-sm:gap-1">
               {isMobile && <HeaderButton onclick={handleShowSearch} title="Search" icon="search" />}
               <HeaderButton onclick={handleToggleDarkMode} title="Toggle Dark Mode" icon="dark_mode" />
               {!isMobile && <HeaderButton title="Create" icon="emergency_recording" />}
               <HeaderButton title="Notification" icon="notifications" />
               {!isMobile && <button className="bg-purple-500 h-8 w-8 text-lg text-white font-semibold rounded-full" title="Profile">K</button>}
            </div>
         }
      </header>
   );
}