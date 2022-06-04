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
