import express from 'express';
import userRouter from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;