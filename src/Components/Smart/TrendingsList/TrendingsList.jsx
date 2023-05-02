import PropTypes from "prop-types";

const TrendingsList = ({ trendingsFilms }) => {
  return (
    <>
      {trendingsFilms.length !== 0 && (
        <ul>
          {trendingsFilms.map((film) => {
            return (
              <li key={film.id}>
                <img src={film.poster_path} alt="film poster" />
                <p className="film-title">{film.original_title}</p>
                <p className="film-subtitle"></p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

TrendingsList.propTypes = {
  trendingsFilms: PropTypes.array,
};

export default TrendingsList;
