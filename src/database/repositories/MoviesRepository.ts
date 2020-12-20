import { getRepository, Repository } from 'typeorm';
import Movie from '../models/Movie';
import IMoviesRepository from './IMoviesRepository';

export default class MoviesRepository implements IMoviesRepository {
  private ormRepository: Repository<Movie>;

  constructor() {
    this.ormRepository = getRepository(Movie);
  }

  public async create(movieData: Movie): Promise<Movie> {
    const movie = this.ormRepository.create(movieData);
    await this.ormRepository.save(movie);

    return movie;
  }

  public async findById(id: number): Promise<Movie | undefined> {
    const movie = this.ormRepository.findOne(id);

    return movie;
  }
}
