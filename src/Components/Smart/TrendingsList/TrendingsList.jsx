import PropTypes from "prop-types";
import { getPosterPath } from "../../../API/API";

const TrendingsList = ({ trendingsFilms }) => {
  return (
    <>
      {trendingsFilms.length !== 0 && (
        <ul>
          {trendingsFilms.map((film) => {
            return (
              <li key={film.id}>
                <img src={getPosterPath(film.poster_path)} alt="film poster" />
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
  trendingsFilms: PropTypes.array.isRequired,
};

export default TrendingsList;
