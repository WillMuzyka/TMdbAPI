import IMoviesRepository from '../IMoviesRepository';
import Movie from '../../models/Movie';
import IMovieDTO from '../../../dtos/IMovieDTO';

export default class MoviesRepository implements IMoviesRepository {
  private fakeRepository: Movie[];

  constructor() {
    this.fakeRepository = [];
  }

  public async create(movieData: IMovieDTO): Promise<Movie> {
    this.fakeRepository.push(movieData);
    return movieData;
  }

  public async findById(id: number): Promise<Movie | undefined> {
    const movie = this.fakeRepository.find((m) => id === m.id);
    return movie;
  }
}
