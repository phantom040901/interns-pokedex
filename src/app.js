import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import router from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// Static files
app.use(express.static(join(__dirname, '../public')));

// Routes
app.use('/', router);

export default app;
