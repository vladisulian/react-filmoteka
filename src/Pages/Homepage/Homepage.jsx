import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getTrendingFilms } from "../../API/API";

const Homepage = () => {
  const [trendingsFilms, setTrendingsFilms] = useState([]);

  useEffect(() => {
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
      <h1>This is a Homepage</h1>
    </>
  );
};

export default Homepage;
