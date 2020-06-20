import React, { useEffect, useState } from "react";
import { apiGetMovie } from "../api/api";
import { LoadingScreen } from "./LoadingScreen";
import CircularProgress from "./CircularProgress";

const MovieView = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    apiGetMovie(match.params.id)
      .then((json) => setMovie(json))
      .catch((e) => setError("failed! :( maybe try reloading the page"));
  }, [match.params.id]);

  if (!movie) return <LoadingScreen delay={800} message="loading" />;

  /* const fixedDate =
    movie.release_date && movie.release_date instanceof String
      ? movie.release_date.split("-").reverse().join(".")
      : ""; */

  return (
    <div className="movieView">
      <div className="imageWrapper">
        <div className="imageDimension">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="movie poster"
          />
        </div>
      </div>
      <div className="description">
        <h1>{movie.title}</h1>
        <div className="basicInfo">
          <div className="movieRating flexCenterAll">
            {movie.vote_average || 0}
            <CircularProgress
              className="bgCircle"
              radius={33}
              stroke={4}
              progress={100}
            />
            <CircularProgress
              radius={35}
              stroke={5}
              progress={movie.vote_average * 10}
            />
          </div>
          <div className="basicInfoInner">
            <p className="voteCount">
              <strong>{movie.vote_count || 0}</strong> votes
            </p>

            <time className="release" dateTime={movie.release_date}>
              {movie.release_date}
            </time>
            <p className="runtime">
              <strong>{movie.runtime}</strong> min
            </p>
            <p className="popular">
              <strong>{movie.popularity || 0}</strong> hits
            </p>
          </div>
        </div>

        <div className="genres">
          {movie.genres.map((item) => (
            <div
              className="genreItem flexCenterAll"
              key={`tag_${movie.id}_${item.name}`}
            >
              {item.name}
            </div>
          ))}
        </div>

        <p className="overview">{movie.overview}</p>

        {movie.videos && movie.videos.results.length > 0 && (
          <a
            href={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}
            className="trailerLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Trailer
          </a>
        )}

        <a
          className="themoviedbLink"
          href={"https://www.themoviedb.org/movie/" + movie.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          see full description on <strong>themoviedb.org</strong>
        </a>
      </div>
    </div>
  );
};

export default MovieView;
