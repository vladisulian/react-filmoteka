import PropTypes from "prop-types";
import { getPosterPath } from "../../../API/API";
import("./TrendingsList.scss");

const TrendingsList = ({ trendingsFilms }) => {
  return (
    <>
      {trendingsFilms.length !== 0 && (
        <ul className="trendings-list">
          {trendingsFilms.map((film) => {
            return (
              <li key={film.id} className="item">
                <img
                  src={getPosterPath(film.poster_path)}
                  alt="film poster"
                  className="film-poster"
                />
                <div className="film-about">
                  <p className="film-title">
                    {film.original_title || film.original_name}
                  </p>
                  <p className="film-subtitle">Genres | Year</p>
                </div>
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
