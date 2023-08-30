import express from 'express';
import { routerMarvelComic } from './routers/routerMarvelComic';
import { envConfig } from './config/config';

// CONSTANTS
const app = express();

// MIDDLEWARES
app.use(express.json()); // support body jsons

// Sample route to test that server is running
app.get('/ping', (_req, res) => {
    res.send('pong');
});

// ROUTERS
app.use('/api/v1/comics',routerMarvelComic)

// Server
const { PORT } = envConfig;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});