import httpGet from '../utils/http';
import MovieDTO from '../dtos/MovieDTO';
import { MoviesRepositoryDTO } from '../database/repositories/MoviesRepository';

interface TranslationsResponse {
  translations: {
    english_name: string;
  }[]
}
interface MoviesResponse {
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

class GetMovie {
  constructor(
    private moviesRepository: MoviesRepositoryDTO,
  ) {}

  public async execute(id: number): Promise<MovieDTO> {
    const duplicated = await this.moviesRepository.findById(id);
    if (duplicated) return duplicated;

    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const key = process.env.THEMOVIEDB_API_KEY;

    const movieResponse = await httpGet<MoviesResponse>(url, key);
    const translationsResponse = await httpGet<TranslationsResponse>(`${url}/translations`, key);

    const movieData = {
      ...this.format_movie_data(movieResponse, translationsResponse),
    };

    this.moviesRepository.create(movieData);
    return (movieData);
  }

  private format_movie_data(
    movieResponse: MoviesResponse, translationsResponse: TranslationsResponse,
  ): MovieDTO {
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
