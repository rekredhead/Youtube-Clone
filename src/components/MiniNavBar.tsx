import navBarData from "../data/navBarData";
import { useState } from 'react';

type NavBarButtonProps = {
   text: string;
   icon: string;
}
function NavBarButton({ text, icon }: NavBarButtonProps) {
   const [isFocused, setIsFocused] = useState(false);

   const handleFocus = () => setIsFocused(true);
   const handleBlur = () => setIsFocused(false);

   return (
      <button
         onFocus={handleFocus}
         onBlur={handleBlur}
         className="flex flex-col py-2 items-center rounded-xl hover:bg-zinc-800 focus:bg-zinc-700"
      >
         <span className={`material-symbols-outlined text-[28px] ${isFocused ? 'material-symbols-outlined-fill' : ''}`}>{icon}</span>
         <h1 className='text-[10px] text-center'>{text}</h1>
      </button>
   );
}

export default function MiniNavBar(): JSX.Element {
   const navbarData = navBarData.miniNavBarData;

   return (
      <nav className="flex flex-col mt-14 w-20 p-2 gap-4">
         {navbarData.map((item, index) => <NavBarButton key={index} text={item.text} icon={item.icon} />)}
      </nav>
   );
}