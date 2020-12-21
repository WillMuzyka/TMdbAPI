import 'reflect-metadata';

import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

import FakeMoviesRepository from '../../database/repositories/fakes/FakeMoviesRepository';
import GetMovieService from '../GetMovieService';

let fakeMoviesRepository: FakeMoviesRepository;
let getMovie: GetMovieService;

describe('GetMovie', () => {
  const MovieResponse = {
    id: 0,
    title: 'John Doe: The movie',
    overview: 'A movie about John Doe',
    runtime: 90,
    release_date: '1990-06-06',
    genres: [
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 9648,
        name: 'Mystery',
      },
    ],
    popularity: 2.083,
    poster_path: '/ikE45rOzA3ocKhcH5hCXqJAFTO.jpg',
  };

  const TranslationResponse = {
    id: 0,
    translations: [
      { english_name: 'English' },
      { english_name: 'Dutch' },
    ],
  };

  const ExpectedResponse = {
    id: 0,
    title: 'John Doe: The movie',
    overview: 'A movie about John Doe',
    runtime: 90,
    release_date: '1990-06-06',
    genres: [
      'Drama',
      'Mystery',
    ],
    popularity: 2.083,
    poster_path: '/ikE45rOzA3ocKhcH5hCXqJAFTO.jpg',
    translations: [
      'English',
      'Dutch',
    ],
  };

  beforeEach(() => {
    fakeMoviesRepository = new FakeMoviesRepository();
    getMovie = new GetMovieService(fakeMoviesRepository);

    const mock = new AxiosMockAdapter(axios);
    mock
      .onGet(/.*\d$/)
      .reply(200, MovieResponse);
    mock
      .onGet(/.*\/translations$/)
      .reply(200, TranslationResponse);
  });

  it('should be able to get a movie from TMdb API', async () => {
    const movie = await getMovie.execute(0);
    expect(movie).toMatchObject(ExpectedResponse);
  });

  it('should return movie from database if available', async () => {
    await getMovie.execute(0);

    const otherMock = new AxiosMockAdapter(axios);
    otherMock
      .onGet(/.*\d$/)
      .reply(404, {});

    const movie = await getMovie.execute(0);
    expect(movie).toMatchObject(ExpectedResponse);
  });
});
