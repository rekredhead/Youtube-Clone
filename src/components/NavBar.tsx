import { useState } from 'react';

type NavBarButtonProps = {
   text: string;
   icon: string;
}

function NavBarButton({text, icon}: NavBarButtonProps) {
   const [isFocused, setIsFocused] = useState(false);

   const handleFocus = () => setIsFocused(true);
   const handleBlur = () => setIsFocused(false);

   return (
      <button
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

   const playLists = [
      "Play List 1", "Play List 2", "Play List 3", "Play List 4", "Play List 5",
      "Play List 6", "Play List 7", "Play List 8", "Play List 9", "Play List 10"
   ];
   const subscriptions = [
      "Subscription 1", "Subscription 2", "Subscription 3", "Subscription 4", "Subscription 5",
      "Subscription 6", "Subscription 7", "Subscription 8", "Subscription 9", "Subscription 10"
   ];

   return (
      <nav className="flex flex-col fixed top-14 bottom-0 left-0 w-60 p-2 overflow-y-scroll">
         <NavBarButton text="Home" icon="home" />
         <NavBarButton text="Shorts" icon="theaters" />
         <NavBarButton text="Subscriptions" icon="subscriptions" />
         <hr className="my-3"/>
         <NavBarButton text="Library" icon="video_library" />
         <NavBarButton text="History" icon="history" />
         <NavBarButton text="Your Videos" icon="smart_display" />
         <NavBarButton text="Watch Later" icon="schedule" />
         <NavBarButton text="Liked Videos" icon="thumb_up" />
         {
            showPlaylists &&
            playLists.map((playList) => <NavBarButton text={playList} icon="playlist_play" />)
         }
         <NavBarButton text="Show more" icon="expand_more" />
         <hr className="my-3"/>
         <h1 className='mx-4 font-semibold'>Subscriptions</h1>
         {
            subscriptions.map((subscription) => <NavBarButton text={subscription} icon="account_circle" />)
         }
         <hr className='my-3'/>
         <h1 className='mx-4 font-semibold'>Explore</h1>
         <NavBarButton text="Trending" icon="local_fire_department" />
         <NavBarButton text="Music" icon="music_note" />
         <NavBarButton text="Gaming" icon="sports_esports" />
         <NavBarButton text="Sports" icon="trophy" />
         <hr className='my-3'/>
         <h1 className='mx-4 font-semibold'>More From YouTube</h1>
         <NavBarButton text="YouTube Studio" icon="token" />
         <NavBarButton text="YouTube Kids" icon="family_restroom" />
         <hr className='my-3'/>
         <NavBarButton text="Settings" icon="settings" />
         <NavBarButton text="Report History" icon="flag" />
         <NavBarButton text="Help" icon="help" />
         <NavBarButton text="Send Feedback" icon="reviews" />
      </nav>
   );
}