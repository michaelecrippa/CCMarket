import { asset as ArtAsset } from '@/database/models/Asset';
import { ArtAssetDTO } from '@/dtos/artAsset.dto';
import { HttpException } from '@exceptions/HttpException';

class ArtService {
  public async createEntity(artAsset: ArtAssetDTO, user: undefined) {
    try {
      const userId = 1; // use user's id when available

      await ArtAsset.create({
        name: artAsset.name,
        price: artAsset.price,
        description: artAsset.description,
        author_id: userId,
        owner_id: userId,
        nasa_asset_id: artAsset.nasaAssetId,
        likes: 0,
        picture_uri: '', //TODO upload and save picture uri
        created_at: new Date(),
      });
    } catch (ex) {
      throw new HttpException(500, 'Saving new user was not successful!');
    }
  }

  public getEntity(entityName: string): Promise<ArtAsset> {
    try {
      return ArtAsset.findOne({ where: { name: entityName } });
    } catch (ex) {
      throw new HttpException(500, `Retrieving entity with name:${entityName} failed!`);
    }
  }
}

export default ArtService;
