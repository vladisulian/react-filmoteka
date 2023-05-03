import { useEffect, useState } from "react";
import { getTrendingFilms } from "../../API/API";
import TrendingsList from "../../Components/Smart/TrendingsList/TrendingsList";
import Pagination from "../../Components/Smart/Pagination/Pagination";

const Homepage = () => {
  const [trendingsFilms, setTrendingsFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const onPageChange = (pageNumber) => {
    console.log(`Page number ${pageNumber}`);
    return;
  };

  return (
    <>
      <TrendingsList trendingsFilms={trendingsFilms} />
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={10}
      />
    </>
  );
};

export default Homepage;
