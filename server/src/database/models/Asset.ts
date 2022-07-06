import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class asset extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  price: number;

  @Column
  picture_uri: string;

  @Column({ allowNull: false })
  nasa_asset_id: number;

  @Column({ allowNull: false })
  author_id: number;

  @Column
  description: string;

  @Column
  owner_id: number;

  @Column
  created_at: Date;

  @Column
  updated_at: Date;
}
