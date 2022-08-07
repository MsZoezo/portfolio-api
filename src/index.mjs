import express from 'express';
import settings from '../settings.json' assert { type: 'json' };

const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(settings.port, () => console.log(`Listening on port ${settings.port}`));