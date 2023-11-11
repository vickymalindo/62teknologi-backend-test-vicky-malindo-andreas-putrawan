import express from 'express';
import db from './config/database.js';
import Business from './models/business.js';

const app = express();

try {
  await db.authenticate();
  console.log('Database connected');
  await Business.sync({ force: true });
} catch (error) {
  console.log(error);
}

app.use(express.json());

app.listen(3000, () => {
  console.log('Example app listening on 3000');
});
