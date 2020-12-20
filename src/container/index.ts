import { container } from 'tsyringe';
import IMoviesRepository from '../database/repositories/IMoviesRepository';
import MoviesRepository from '../database/repositories/MoviesRepository';

container.registerSingleton<IMoviesRepository>(
  'MoviesRepository',
  MoviesRepository,
);
