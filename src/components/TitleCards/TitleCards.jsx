import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWM2YzQyYTU2MDI2MmE0ODYwNTIzZTU3Yzg0NDAzYyIsIm5iZiI6MTc1NDQwMTM1MS45NDIwMDAyLCJzdWIiOiI2ODkyMGE0NzRiMDcyNGFiZTRmM2VkNDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xVyJf9LwFCpHD6CvsQ2GLkleWRh1ntXK74MfWnFvixg',
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);

  return (
    <div
      className="
        mt-[50px] mb-[30px] 
        max-[800px]:mt-[20px] max-[800px]:mb-0
      "
    >
      <h2
        className="
          mb-[8px] text-white font-semibold 
          max-[800px]:text-[18px] max-[500px]:text-[15px]
        "
      >
        {title ? title : 'Popular on Netflix'}
      </h2>

      <div
        ref={cardsRef}
        className="
          flex gap-[12px] overflow-x-auto px-[16px] py-[12px] whitespace-nowrap scroll-smooth
          [&::-webkit-scrollbar]:hidden
        "
      >
        {apiData.map((card, index) => (
          <Link
            to={`/player/${card.id}`}
            key={index}
            className="
              flex-shrink-0 relative 
              min-w-[320px] max-[1024px]:min-w-[260px] max-[800px]:min-w-[200px] max-[500px]:min-w-[165px]
            "
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt=""
              className="
                w-full object-cover rounded-[6px] cursor-pointer
                h-[180px] max-[1024px]:h-[150px] max-[800px]:h-[120px] max-[500px]:h-[100px]
              "
            />
            <p
              className="
                absolute bottom-[8px] right-[10px] text-white text-[14px] bg-[rgba(0,0,0,0.4)] 
                px-[6px] py-[2px] rounded-[3px] 
                max-[800px]:text-[12px] max-[500px]:text-[10px]
              "
            >
              {card.original_title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
