import httpGet from '../utils/http';

interface TranslationsDTO {
  translations: {
    english_name: string;
  }[]
}
interface MoviesDTO {
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

interface MovieData {
  id: number;
  title: string;
  overview: string;
  runtime: number;
  release_date: string;
  popularity: number;
  poster_path: string;
  genres: string[];
  translations: string[];
}

class GetMovieData {
  public async execute(id: number): Promise<MovieData> {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const key = process.env.THEMOVIEDB_API_KEY;

    const movieResponse = await httpGet<MoviesDTO>(url, key);
    const { translations } = await httpGet<TranslationsDTO>(`${url}/translations`, key);
    // console.log({ ...movieResponse, ...translationsResponse });

    const genresArray = movieResponse.genres.map((genre) => (genre.name));
    const translationsArray = translations.map((translation) => translation.english_name);

    const movieData = {
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

    return (movieData);
  }
}

export default GetMovieData;
