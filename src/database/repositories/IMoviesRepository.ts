import Movie from '../models/Movie';
import IMovieData from '../../dtos/IMovieDTO';

export default interface IMoviesRepository {
  create(movie: IMovieData): Promise<Movie>;
  findById(id: number): Promise<Movie | undefined>;
};
