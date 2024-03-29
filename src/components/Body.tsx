import videosData from "../data/videosData";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type VideoCardProps = {
   data: {
      title: string;
      duration: string;
      channel_name: string;
      isVerified: boolean;
      viewCount: number;
      time_released: string;
      thumbnail_link: string;
      pfp_link: string;
      link: string;
   };
}

function getSimplifiedViewCount(viewCount: number): string {
   const suffixes = ['K', 'M', 'B'];

   for (let i = suffixes.length - 1; i >= 0; i--) {
      const suffix = suffixes[i];
      const threshold = Math.pow(1000, i + 1);

      if (viewCount >= threshold) {
         const simplifiedCount = (viewCount / threshold).toFixed(1).replace('.0', '');
         return simplifiedCount + suffix;
      }
   }

   return viewCount.toString();
}

function VideoCard(props: VideoCardProps): JSX.Element {
   const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
   const { title, duration, channel_name, isVerified, viewCount, time_released, thumbnail_link, pfp_link, link } = props.data;

   return (
      <a href={link} target='_blank' className="flex flex-col h-fit mb-10 max-md:mb-7">
         <div className="h-fit flex relative overflow-hidden rounded-2xl">
            <img className="flex w-full hover:scale-110 duration-200" src={thumbnail_link} alt="Thumbnail 1" />
            <p className="flex absolute text-white bg-black px-1 text-sm bottom-2 right-2 opacity-90 rounded-md">{duration}</p>
         </div>
         <div className="flex mt-2">
            <div className="flex w-1/6 px-2 py-1 justify-center">
               <img className="rounded-full h-fit w-fit" src={pfp_link} alt="Profile Picture 1" />
            </div>
            <div className="w-5/6">
               <h1 className="text-md font-semibold">{title.length > 70 ? title.slice(0, 70) + '...' : title}</h1>
               <div className="mt-1">
                  <p className={`flex text-sm items-center gap-1 ${darkMode ? 'text-zinc-300' : 'text-zinc-500'}`}>
                     {channel_name}
                     {
                        isVerified &&
                        <span className="material-symbols-outlined material-symbols-outlined-fill text-[0.85rem]">
                           check_circle
                        </span>
                     }
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-zinc-300' : 'text-zinc-500'}`}>{getSimplifiedViewCount(viewCount)} views &bull; {time_released} ago</p>
               </div>
            </div>
         </div>
      </a>
   );
}

export default function Body(): JSX.Element {

   return (
      <main className="body-grid mt-14 h-full p-10 max-md:p-7 overflow-y-scroll">
         {
            videosData.map((videoData) => <VideoCard key={videoData.id} data={videoData} />)
         }
      </main>
   );
}