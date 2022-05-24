import { Table, Column, Model, PrimaryKey, NotNull, AutoIncrement } from 'sequelize-typescript';

@Table
export class NasaAsset extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  id: number;

  @Column
  @NotNull
  name: string;

  @Column
  date: Date;
}

// export const NasaAsset = sequelize.define('nasa_assets', {
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   date: {
//     type: DataTypes.DATE,
//   },
// });
