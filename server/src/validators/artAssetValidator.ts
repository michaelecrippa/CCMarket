import { ValidationError } from '../exceptions/ValidationException';
import { ArtAssetDTO } from '@/dtos/artAsset.dto';

import { isNil } from 'lodash';

export class ArtAssetValidator {
  constructor(private asset: ArtAssetDTO) {}

  validateNewEntity() {
    this.validateInput();
  }

  private validateInput() {
    if (isNil(this.asset)) {
      throw new ValidationError('asset', 'Invalid asset data provided!');
    }

    if (this.asset.name.length > 100) {
      throw new ValidationError('name', 'Name must be shorter than 100 characters!');
    }

    if (isNil(this.asset.nasaAssetId)) {
      throw new ValidationError('nasaAsset', 'Nasa asset must be selected!');
    }

    if (this.asset.price < 0) {
      throw new ValidationError('price', 'Price must be as positive number!');
    }
  }
}
