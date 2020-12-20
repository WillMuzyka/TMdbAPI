import 'dotenv/config';
import './database';
import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';

import './container';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  console.error(err); //eslint-disable-line

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3333!');
});
