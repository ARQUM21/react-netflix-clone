import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer.jsx/Footer';

const Home = () => {
  return (
    <div className="relative">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full">
        {/* Banner Image */}
        <img
          src={hero_banner}
          alt=""
          className="w-full h-auto block object-cover [mask-image:linear-gradient(to_right,transparent,black_75%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)]"
        />

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent z-[1]" />

        {/* Hero Caption */}
        <div className="absolute bottom-0 left-0 pl-[6%] pb-[30px] w-full text-white z-[2] 
                        max-[800px]:pl-[4%] max-[500px]:px-[3%] max-[500px]:pb-[20px]">
          {/* Title Image */}
          <img
            src={hero_title}
            alt=""
            className="w-[90%] max-w-[420px] mb-[30px] max-[800px]:mb-[15px] max-[800px]:w-1/2 max-[500px]:hidden"
          />

          {/* Caption Text */}
          <p className="max-w-[700px] text-[17px] mb-[20px] leading-[1.4] 
                        max-[800px]:text-[14px] max-[800px]:mb-[15px] max-[500px]:text-[12px] max-[500px]:max-w-full">
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul 
            embarks on a quest to save the city from an immortal enemy.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-[10px] mb-[50px] max-[1024px]:mb-[30px]">
            <button className="flex items-center gap-[10px] bg-white text-black font-semibold text-[15px] rounded px-[20px] py-[8px] cursor-pointer transition-colors hover:bg-white/75 
                               max-[800px]:[&>img]:w-[20px] max-[500px]:px-[10px] max-[500px]:py-[4px] max-[500px]:gap-[5px] max-[500px]:text-[12px] max-[500px]:[&>img]:w-[15px]">
              <img src={play_icon} alt="" className="w-[25px]" />
              Play
            </button>
            <button className="flex items-center gap-[10px] bg-[#6d6d6eb3] text-white font-semibold text-[15px] rounded px-[20px] py-[8px] cursor-pointer transition-colors hover:bg-[#6d6d6e66]
                               max-[800px]:[&>img]:w-[20px] max-[500px]:px-[10px] max-[500px]:py-[4px] max-[500px]:gap-[5px] max-[500px]:text-[12px] max-[500px]:[&>img]:w-[15px]">
              <img src={info_icon} alt="" className="w-[25px]" />
              More Info
            </button>
          </div>

          {/* Title Cards (hidden on tablets/small laptops) */}
          <div className="max-[1024px]:hidden">
            <TitleCards />
          </div>
        </div>
      </div>

      {/* More Cards Section */}
      <div className="pl-[6%] max-[800px]:pl-[4%]">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for you"} category={"now_playing"} />
      </div>

      <Footer />
    </div>
  )
}

export default Home
