import React from 'react';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <div
      className="
        px-[4%] py-[30px] max-w-[1000px] mx-auto text-left
      "
    >
      {/* Social Icons */}
      <div
        className="
          flex flex-wrap gap-[20px] my-[40px] 
          max-[500px]:justify-center max-[500px]:gap-[15px]
        "
      >
        {[facebook_icon, instagram_icon, twitter_icon, youtube_icon].map((icon, i) => (
          <img
            key={i}
            src={icon}
            alt=""
            className="
              w-[30px] cursor-pointer transition-transform duration-200 hover:scale-110
              max-[800px]:w-[25px]
            "
          />
        ))}
      </div>

      {/* Footer Links */}
      <ul
        className="
          text-white grid grid-cols-4 gap-[15px] mb-[30px] list-none p-0 
          max-[800px]:grid-cols-2 max-[800px]:gap-[10px] 
          max-[500px]:grid-cols-1 max-[500px]:text-center
        "
      >
        {[
          'Audio Description',
          'Help Center',
          'Gift Cards',
          'Media Centre',
          'Investor relations',
          'Jobs',
          'Terms of use',
          'Privacy',
          'Legal Notices',
          'Cookie preferences',
          'Corporate Information',
          'Contact Us',
        ].map((item, i) => (
          <li
            key={i}
            className="
              cursor-pointer text-[14px] hover:underline 
              max-[800px]:text-[13px] max-[500px]:text-[12px]
            "
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <p
        className="
          text-gray-400 text-[14px] 
          max-[500px]:text-center max-[500px]:text-[12px]
        "
      >
        © 1997-2025 Netflix, Inc.
      </p>
    </div>
  );
};

export default Footer;
