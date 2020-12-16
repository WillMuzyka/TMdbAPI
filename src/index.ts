import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Server online!' }));

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
