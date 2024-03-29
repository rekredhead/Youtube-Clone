import { useState } from 'react';
import navBarData from '../data/navBarData';
import { useSelector } from "react-redux";
import { RootState } from "../store";

type NavBarButtonProps = {
   text: string;
   icon: string;
   expand?: any;
}
function NavBarButton({ text, icon, expand }: NavBarButtonProps) {
   const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
   const backgroundColors = darkMode ? 'hover:bg-zinc-800 focus:bg-zinc-700' : 'hover:bg-zinc-300 focus:bg-zinc-200';

   const [isFocused, setIsFocused] = useState(false);
   const handleFocus = () => setIsFocused(true);
   const handleBlur = () => setIsFocused(false);

   return (
      <button
         onClick={expand}
         onFocus={handleFocus}
         onBlur={handleBlur}
         className={`flex py-2 px-4 items-center rounded-xl ${backgroundColors}`}
      >
         <span className={`material-symbols-outlined text-[28px] ${isFocused ? 'material-symbols-outlined-fill' : ''}`}>{icon}</span>
         <h1 className={`ml-6 text-[15px] ${isFocused ? 'font-semibold' : ''}`}>{text}</h1>
      </button>
   );
}

export default function ExtendedNavBar() {
   const [showPlaylists, setShowPlaylists] = useState(false);
   const [showSubscriptions, setShowSubscriptions] = useState(false);

   const handleShowPlaylist = (e: any) => {
      setShowPlaylists(prevState => !prevState);
      e.currentTarget.blur();
   }
   const handleShowSubscriptions = (e: any) => {
      setShowSubscriptions(prevState => !prevState);
      e.currentTarget.blur();
   }

   const playLists = navBarData.playLists;
   const subscriptions = navBarData.subscriptions;
   const navbarData = navBarData.extendedNavbarData;

   return (
      <nav className="flex flex-col mt-14 w-60 p-2 overflow-y-hidden hover:overflow-y-scroll">
         { navbarData.slice(0, 3).map((item, index) => <NavBarButton key={index} text={item.text} icon={item.icon} />) }

         <hr className="my-3" />

         { navbarData.slice(3, 8).map((item, index) => <NavBarButton key={index} text={item.text} icon={item.icon} />) }

         {
            showPlaylists &&
            playLists.map((playList, index) => <NavBarButton key={index} text={playList} icon="playlist_play" />)
         }
         <NavBarButton
            expand={handleShowPlaylist}
            text={showPlaylists ? 'Show less' : 'Show more'}
            icon={showPlaylists ? 'expand_less' : 'expand_more'}
         />

         <hr className="my-3" />

         <h1 className='mx-4 font-semibold'>Subscriptions</h1>
         {
            subscriptions.slice(0, 5).map((subscription, index) => <NavBarButton key={index} text={subscription} icon="account_circle" />)
         }
         {
            showSubscriptions &&
            subscriptions.slice(5).map((subscription, index) => <NavBarButton key={index} text={subscription} icon="account_circle" />)
         }
         <NavBarButton
            expand={handleShowSubscriptions}
            text={showSubscriptions ? `Show less` : `Show ${subscriptions.length - 5} more`}
            icon={showSubscriptions ? 'expand_less' : 'expand_more'}
         />

         <hr className='my-3' />

         <h1 className='mx-4 font-semibold'>Explore</h1>
         { navbarData.slice(8, 12).map((item, index) => <NavBarButton key={index} text={item.text} icon={item.icon} />) }

         <hr className='my-3' />

         <h1 className='mx-4 font-semibold'>More From YouTube</h1>
         { navbarData.slice(12, 14).map((item, index) => <NavBarButton key={index} text={item.text} icon={item.icon} />) }

         <hr className='my-3' />

         { navbarData.slice(14).map((item, index) => <NavBarButton key={index} text={item.text} icon={item.icon} />) }
      </nav>
   );
}