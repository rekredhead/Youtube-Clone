import { useState } from 'react';
import extendedNavBarData from '../data/extendedNavBarData';

type NavBarButtonProps = {
   text: string;
   icon: string;
   expand?: any;
}

function NavBarButton({ text, icon, expand }: NavBarButtonProps) {
   const [isFocused, setIsFocused] = useState(false);

   const handleFocus = () => setIsFocused(true);
   const handleBlur = () => setIsFocused(false);

   return (
      <button
         onClick={expand}
         onFocus={handleFocus}
         onBlur={handleBlur}
         className="flex py-2 px-4 items-center rounded-xl bg-zinc-900 hover:bg-zinc-800 focus:bg-zinc-700"
      >
         <span className={`material-symbols-outlined text-[28px] ${isFocused ? 'material-symbols-outlined-fill' : ''}`}>{icon}</span>
         <h1 className={`ml-6 text-[15px] ${isFocused ? 'font-semibold' : ''}`}>{text}</h1>
      </button>
   );
}

export default function NavBar() {
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

   const playLists = extendedNavBarData.playLists;
   const subscriptions = extendedNavBarData.subscriptions;
   const navbarData = extendedNavBarData.navbarData;

   return (
      <nav className="flex flex-col fixed top-14 bottom-0 left-0 w-60 p-2 overflow-y-hidden hover:overflow-y-scroll">
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