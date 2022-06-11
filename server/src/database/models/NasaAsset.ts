import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class nasa_asset extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column({ allowNull: false, unique: true })
  name: string;

  @Column
  description: string;

  @Column
  created_at: Date;

  @Column
  updated_at: Date;
}
