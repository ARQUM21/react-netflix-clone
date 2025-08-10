import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  const [signState, setSignState] = useState('Sign In');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === 'Sign In') {
      await login(email, password);
      
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="w-full h-screen flex items-center justify-center">
      <img src={netflix_spinner} alt="" className="w-[60px]" />
    </div>
  ) : (
    <div
      className="
        h-screen 
        bg-[linear-gradient(#0000007e,#0000007e),url('/background_banner.jpg')]
        bg-cover bg-center 
        px-[8%] py-[20px] 
        max-[500px]:px-[5%] max-[500px]:py-[15px]
      "
    >
      <img src={logo} alt="" className="w-[150px]" />

      <div
        className="
          w-full max-w-[450px] 
          bg-[rgba(0,0,0,0.75)] rounded 
          p-[60px] mx-auto 
          max-[500px]:p-[20px] max-[500px]:mt-[30px]
        "
      >
        <h1 className="text-white text-[32px] font-medium mb-[28px]">
          {signState}
        </h1>

        <form>
          {signState === 'Sign Up' && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              className="
                w-full h-[50px] bg-[#333] text-white 
                my-[12px] rounded px-[20px] 
                text-[16px] font-medium outline-none border-none
              "
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="
              w-full h-[50px] bg-[#333] text-white 
              my-[12px] rounded px-[20px] 
              text-[16px] font-medium outline-none border-none
            "
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="
              w-full h-[50px] bg-[#333] text-white 
              my-[12px] rounded px-[20px] 
              text-[16px] font-medium outline-none border-none
            "
          />

          <button
            onClick={user_auth}
            type="submit"
            className="
              w-full bg-[#e50914] text-white 
              rounded text-[16px] font-medium 
              py-[16px] mt-[20px] cursor-pointer border-none outline-none
            "
          >
            {signState}
          </button>

          <div className="flex items-center justify-between text-[#b3b3b3] text-[13px] mt-[20px]">
            <div className="flex items-center gap-[5px]">
              <input type="checkbox" className="w-[18px] h-[18px]" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="mt-[40px] text-[#737373]">
          {signState === 'Sign In' ? (
            <p>
              New to Netflix?
              <span
                onClick={() => setSignState('Sign Up')}
                className="ml-[6px] text-white font-medium cursor-pointer"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?
              <span
                onClick={() => setSignState('Sign In')}
                className="ml-[6px] text-white font-medium cursor-pointer"
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
