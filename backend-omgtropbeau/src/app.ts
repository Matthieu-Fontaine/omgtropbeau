import express from 'express';
import userRouter from './routes/user.routes';
import authRouter from './routes/token.routes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;