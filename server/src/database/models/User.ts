import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { asset } from './Asset';

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

  @Column
  bio: string;

  @HasMany(() => asset)
  userAssets: asset[];
}
