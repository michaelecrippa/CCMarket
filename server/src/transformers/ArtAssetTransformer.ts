import { Asset as AssetDTO } from '@/interfaces/assets.interface';
import { asset, asset as DataBaseAssetModel } from '@/database/models/Asset';

export class ArtAssetTransformer {

  transformAssets(assets: DataBaseAssetModel[]): AssetDTO[] {
    return assets.map(asset => this.tranform(asset));
  }

  tranform(asset: DataBaseAssetModel): AssetDTO {
    return {
      name: asset.name,
      price: asset.price,
      pictureUri: asset.picture_uri,
    }
  }
}