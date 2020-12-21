import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetMovieService from '../services/GetMovieService';
import AppError from '../errors/AppError';

class MoviesController {
  public async index(req: Request, res: Response): Promise<Response> {
    // Get id from params
    const { id } = req.params;
    const numberId = parseInt(id, 10);

    // Check if is valid id
    if (typeof numberId !== 'number') {
      throw new AppError('ID requested is not a number.', 400);
    }

    // Make the API request
    try {
      const getMovie = container.resolve(GetMovieService);
      const movieData = await getMovie.execute(numberId);
      return res.json(movieData);
    } catch (error) {
      throw new AppError(
        error.message || 'Error getting movie information',
        error.status || 400,
      );
    }
  }
}

export default MoviesController;
