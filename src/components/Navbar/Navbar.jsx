import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import { logout, auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [navDark, setNavDark] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Scroll navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setNavDark(window.scrollY >= 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      navigate('/login'); 
    }
  };

  return (
    <div
      className={`w-full fixed top-0 left-0 z-10 flex justify-between items-center font-normal text-[#e5e5e5] transition-colors duration-300 ${
        navDark
          ? 'bg-[#141414]'
          : 'bg-gradient-to-b from-black/70 via-black/10 to-transparent'
      } px-[6%] py-5 md:py-4 sm:py-3`}
    >
      {/* Left Side */}
      <div className="flex items-center gap-[50px] md:gap-5">
        <img src={logo} alt="Logo" className="w-[90px] md:w-[80px] sm:w-[65px]" />
        <ul className="flex list-none gap-5 m-0 p-0 max-md:hidden">
          <li className="cursor-pointer hover:text-white">Home</li>
          <li className="cursor-pointer hover:text-white">TV Shows</li>
          <li className="cursor-pointer hover:text-white">Movies</li>
          <li className="cursor-pointer hover:text-white">New & Popular</li>
          <li className="cursor-pointer hover:text-white">My List</li>
          <li className="cursor-pointer hover:text-white">Browse by language</li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5 md:gap-4 sm:gap-2">
        <img src={search_icon} alt="Search" className="w-5 sm:w-[18px] cursor-pointer" />
        <p className="hidden sm:block">Children</p>
        <img src={bell_icon} alt="Notifications" className="w-5 sm:w-[18px] cursor-pointer" />

        {/* Sign In / Sign Out link */}
        <p
          onClick={handleAuthClick}
          className="cursor-pointer text-sm hover:text-white transition-colors"
        >
          {user ? 'Sign Out' : 'Sign In'}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
