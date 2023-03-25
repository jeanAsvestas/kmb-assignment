import './kmb-movie-comp.scss';
import Button from '@mui/material/Button';
import moviesApi from '../../services/kiss-my-button';
import { isAxiosError /*, AxiosError*/ } from 'axios';
import { useState } from 'react';
import type { MovieInterface } from '../../model/main.types';

export const Movies = () => {
  const [movies, setMovies] = useState<MovieInterface[] | null>();

  const getTheMovies = async () => {
    try {
      const res = await moviesApi.getMovies();
      console.log(res.data);
      setMovies(res.data.results);
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div className="main-container">
        <Button
          className="navbar-container"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => getTheMovies()}
        >
          Get
        </Button>
        {movies ? <p>Found</p> : <p>Nothing</p>}
      </div>
    </>
  );
};
