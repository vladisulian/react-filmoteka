import { useEffect, useState } from "react";
import { getTrendingFilms } from "../../API/API";
import TrendingsList from "../../Components/Smart/TrendingsList/TrendingsList";

const Homepage = () => {
  const [trendingsFilms, setTrendingsFilms] = useState([]);

  // get trending films
  useEffect(() => {
    // Создал новую асинхронную функцию, потому что хуки всегда синхронные.
    // Здесь было 2 решения: либо промисы, либо новая функция и await с try/catch

    const getTrending = async () => {
      try {
        const data = await getTrendingFilms();
        setTrendingsFilms(data);
      } catch (error) {
        console.error(error);
      }
    };
    getTrending();
  }, []);

  return (
    <>
      <TrendingsList trendingsFilms={trendingsFilms} />
    </>
  );
};

export default Homepage;
