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

  @Column
  created_at: Date;

  @Column
  updated_at: Date;
}
