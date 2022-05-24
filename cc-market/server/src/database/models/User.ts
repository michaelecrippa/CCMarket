import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class user extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column({ allowNull: false })
  username: string;

  @Column({ allowNull: false })
  password: string;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column({ allowNull: false })
  email: string;

  @Column
  picture_uri: string;
}
// export const User = sequelize.define('users', {
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   first_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   last_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   picture_uri: {
//     type: DataTypes.STRING,
//   },
// });
