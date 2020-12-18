import { getRepository, Repository } from 'typeorm';
import Movie from '../models/Movie';
import MovieDTO from '../../dtos/MovieDTO';

export interface MoviesRepositoryDTO {
  save(movie: Movie): Promise<Movie>;
  create(movie: MovieDTO): Promise<Movie>;
  findById(id: number): Promise<Movie | undefined>;
}

export default class MoviesRepository implements MoviesRepositoryDTO {
  private ormRepository: Repository<Movie>;

  constructor() {
    this.ormRepository = getRepository(Movie);
  }

  public async save(movie: Movie): Promise<Movie> {
    return this.ormRepository.save(movie);
  }

  public async create(movieData: MovieDTO): Promise<Movie> {
    const movie = this.ormRepository.create(movieData);
    await this.ormRepository.save(movie);

    return movie;
  }

  public async findById(id: number): Promise<Movie | undefined> {
    const movie = this.ormRepository.findOne(id);

    return movie;
  }
}
