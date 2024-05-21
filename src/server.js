import router from './routes/routes.js';
import express from 'express';
import cors from 'cors';

const app = express();

const loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} - ${req.path} - ${new Date().toTimeString()}`);
    next();
};

app.use(cors());
app.use(express.json());
app.use(loggingMiddleware);
app.use(router);

app.listen(3000, () => {
    console.log('Server is running on port : 3000');
});