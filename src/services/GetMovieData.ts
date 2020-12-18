import httpGet from '../utils/http';

interface MovieData {
  title:string;
}

class GetMovieData {
  public async execute(id: number): Promise<string> {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const key = process.env.THEMOVIEDB_API_KEY;
    const movieResponse = await httpGet<MovieData>(url, key);
    // const translationsResponse = await httpGet<MovieData>(`${url}/translations`, key);
    // console.log({ ...movieResponse, ...translationsResponse });
    return (movieResponse.title);
  }
}

export default GetMovieData;
