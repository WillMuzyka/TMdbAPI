export default interface MovieData {
  id: number;
  title: string;
  overview: string;
  runtime: number;
  release_date: string;
  popularity: number;
  poster_path: string;
  genres: string[];
  translations: string[];
};
