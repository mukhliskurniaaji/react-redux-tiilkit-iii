import React from 'react'
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss";
import Slider from "react-slick";
import { settings } from './settings';

function MovieListing() {
  // const moviesList = useSelector(getAllMovies);
  const moviesList = useSelector(getAllMovies);
  const showsList = useSelector(getAllShows)

  let renderMovies = "";
  let renderShows = "";

  renderMovies = moviesList.Response === "True" ? (
    moviesList.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
     ) : (
    <div className='movie-error'>
      <h3>{moviesList.Error}</h3>
    </div>
  )

  renderShows = showsList.Response === "True" ? (
    showsList.Search.map((show, index) => (
      <MovieCard key={index} data={show} />
    ))
     ) : (
    <div className='movie-error'>
      <h3>{showsList.Error}</h3>
    </div>
  )

  return (
    <div className='movie-wrapper'>
      {Object.keys(moviesList).length===0 ? (
        <div className='loading'>...Loading</div>
      ):(
        <>
          <div className='movie-list'>
            <h2>Movies</h2>
            <div className='movie-container'>
              <Slider {...settings}>{renderMovies}</Slider>
            </div>
          </div>
          <div className='movie-list'>
            <h2>Shows</h2>
            <div className='movie-container'>
              <Slider {...settings}>{renderShows}</Slider>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MovieListing;