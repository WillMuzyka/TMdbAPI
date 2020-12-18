import { Request, Response } from 'express';
import GetMovieService from '../services/GetMovieService';
import MoviesRepository from '../database/repositories/MoviesRepository';

class MoviesController {
  public async index(req: Request, res: Response): Promise<Response> {
    // Get id from params
    const { id } = req.params;
    const numberId = parseInt(id, 10);

    // Check if is valid id
    if (typeof numberId !== 'number') {
      return res.status(400).json({ error: 'ID requested is not a number.' });
    }

    // Make the API request
    try {
      const getMovie = new GetMovieService(new MoviesRepository());
      const movieData = await getMovie.execute(numberId);
      return res.json(movieData);
    } catch (error) {
      return res.status(error.status || 400).json({ error });
    }
  }
}

export default MoviesController;
