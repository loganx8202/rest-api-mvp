import express from 'express';
import userRoutes from './routes/userRoutes.js';
import logger from './middleware/logger.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

app.use('/users', userRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
