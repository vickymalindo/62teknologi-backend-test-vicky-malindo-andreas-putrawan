import express from 'express';
import db from './config/database.js';
import router from './routes/route.js';

const app = express();

try {
  await db.authenticate();
  console.log('Database connected');
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log('Example app listening on 3000');
});
