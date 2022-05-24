import { DataTypes } from 'sequelize';
import { sequelize } from '../sequalize';

export const NasaAsset = sequelize.define('nasa_assets', {
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
  date: {
    type: DataTypes.DATE,
  },
});
