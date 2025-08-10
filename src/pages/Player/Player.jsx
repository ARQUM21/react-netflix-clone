import React, { useEffect, useState } from 'react';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: '',
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWM2YzQyYTU2MDI2MmE0ODYwNTIzZTU3Yzg0NDAzYyIsIm5iZiI6MTc1NDQwMTM1MS45NDIwMDAyLCJzdWIiOiI2ODkyMGE0NzRiMDcyNGFiZTRmM2VkNDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xVyJf9LwFCpHD6CvsQ2GLkleWRh1ntXK74MfWnFvixg',
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
        className="absolute top-[20px] left-[20px] w-[50px] cursor-pointer"
      />

      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
        className="rounded-[10px]"
      ></iframe>

      <div className="flex items-center justify-between w-[90%] text-white mt-4">
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
