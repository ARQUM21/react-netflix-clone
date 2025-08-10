import React, { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const navigate = useNavigate();
  const [prevUser, setPrevUser] = useState(undefined); // undefined = first load

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (prevUser === undefined) {
        // First time load, sirf navigate karo, toast mat dikhao
        if (user) {
          navigate('/');
        } else {
          navigate('/login');
        }
      } else {
        // User state change hua, ab toast dikhao
        if (user && !prevUser) {
          toast.success('User is logged In');
          navigate('/');
        } else if (!user && prevUser) {
          toast.info('You have been logged out');
          navigate('/login');
        }
      }
      setPrevUser(user);
    });

    return () => unsubscribe();
  }, [navigate, prevUser]);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
