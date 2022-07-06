import { IsString } from 'class-validator';

export class ArtAssetDTO {
  @IsString()
  public name: string;

  public price: number;

  public picture_uri: string;

  @IsString()
  public description: string;

  public ownerId: number;

  public authorId: number;

  public nasaAssetId: number;

  public likes: number;
}
