import { useEffect, useState } from "react";
import { getTrendingFilms } from "../../API/API";
import TrendingsList from "../../Components/Smart/TrendingsList/TrendingsList";
import Pagination from "../../Components/Smart/Pagination/Pagination";

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

  const filmsQuantity = trendingsFilms.map((__, index) => {
    return index + 1;
  });

  return (
    <>
      <TrendingsList trendingsFilms={trendingsFilms} />
      <Pagination filmsQuantity={filmsQuantity} />
    </>
  );
};

export default Homepage;
