import * as dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

dotenv.config({ path: __dirname + '/../.env' });

const app: Express = express();

app.get('/', (req: Request, res: Response): void => {
  res.status(200).send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`); // remove this with a logger or it will cause linting error no-console
});
