import db from '../config/database.js';
import { Sequelize } from 'sequelize';

const { DataTypes } = Sequelize;

const Business = db.define(
  'businnes',
  {
    location: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Business;
