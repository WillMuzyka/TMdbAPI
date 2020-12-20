import { inject, injectable } from 'tsyringe';

import httpGet from '../utils/http';
import IMovieDTO from '../dtos/IMovieDTO';
import IMoviesRepository from '../database/repositories/IMoviesRepository';

interface ITranslationsResponse {
  translations: {
    english_name: string;
  }[]
}
interface IMoviesResponse {
  id: number;
  title: string;
  overview: string;
  runtime: number;
  release_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  popularity: number;
  poster_path: string;
}

@injectable()
class GetMovie {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  public async execute(id: number): Promise<IMovieDTO> {
    const duplicated = await this.moviesRepository.findById(id);
    if (duplicated) return duplicated;

    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const key = process.env.THEMOVIEDB_API_KEY;

    const movieResponse = await httpGet<IMoviesResponse>(url, key);
    const translationsResponse = await httpGet<ITranslationsResponse>(`${url}/translations`, key);

    const movieData = {
      ...this.format_movie_data(movieResponse, translationsResponse),
    };

    this.moviesRepository.create(movieData);
    return (movieData);
  }

  private format_movie_data(
    movieResponse: IMoviesResponse, translationsResponse: ITranslationsResponse,
  ): IMovieDTO {
    const genresArray = movieResponse.genres.map((genre) => (genre.name));
    const translationsArray = translationsResponse.translations.map(
      (translation) => translation.english_name,
    );

    return {
      id: movieResponse.id,
      title: movieResponse.title,
      overview: movieResponse.overview,
      runtime: movieResponse.runtime,
      release_date: movieResponse.release_date,
      popularity: movieResponse.popularity,
      poster_path: movieResponse.poster_path,
      genres: genresArray,
      translations: translationsArray,
    };
  }
}

export default GetMovie;
