import db from '../config/database.js';
import { Sequelize } from 'sequelize';

const { DataTypes } = Sequelize;

const Business = db.define(
  'businnes',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    alias: {
      type: DataTypes.STRING,
    },
    display_phone: {
      type: DataTypes.STRING,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    is_closed: {
      type: DataTypes.BOOLEAN,
    },
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    review_count: {
      type: DataTypes.INTEGER,
    },
    url: {
      type: DataTypes.STRING,
    },
    // transactions: {
    //   type: Sequelize.ARRAY(Sequelize.TEXT),
    // },
    distance: {
      type: DataTypes.FLOAT(16, 10),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Business;
