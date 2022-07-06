import { nasa_asset } from '@/database/models/NasaAsset';

class NasaAssetService {
  public getAssets() {
    return nasa_asset.findAll();
  }
}

export default NasaAssetService;
