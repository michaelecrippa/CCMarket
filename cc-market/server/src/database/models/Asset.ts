import { DataTypes } from 'sequelize';
import { sequelize } from '../sequalize';

export const Asset = sequelize.define('assets', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
  },
  picture_uri: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  nasa_asset_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'nasa_assets', // or NasaAssets
      key: 'id', //verify
    },
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users', // or User
      key: 'id', // verify
    },
  },
});
