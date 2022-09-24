import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovie, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch()
  const termMovie = "Harry";
  const termShow = "Friends"

  useEffect(()=>{
    dispatch(fetchAsyncMovie(termMovie));
    dispatch(fetchAsyncShows(termShow));
  },[dispatch]);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home;