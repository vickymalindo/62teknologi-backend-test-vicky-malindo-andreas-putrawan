import { Sequelize } from 'sequelize';

// const db = new Sequelize('be-62teknologi', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// export default db;

const db = new Sequelize('be-62teknologi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
