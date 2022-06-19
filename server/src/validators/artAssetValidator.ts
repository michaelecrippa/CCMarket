import { ValidationError } from '../exceptions/ValidationException';
import { ArtAssetDTO } from '@/dtos/artAsset.dto';
import { DefaultNasaAssetId } from '@/constants/NasaAssetConstants';

import ArtService from '@/services/art.service';

import { isEmpty, isNil } from 'lodash';

export class ArtAssetValidator {
  private readonly artService: ArtService;
  constructor(private asset: ArtAssetDTO) {
    this.artService = new ArtService();
  }

  validateNewEntity() {
    this.validateInput();
    this.validateNameUniqueness();
  }

  private validateInput() {
    if (isNil(this.asset)) {
      throw new ValidationError('asset', 'Invalid asset data provided!');
    }

    if (isEmpty(this.asset.name)) {
      throw new ValidationError('name', 'Name cannot be empty!');
    }

    if (this.asset.name.length > 100) {
      throw new ValidationError('name', 'Name must be shorter than 100 characters!');
    }

    if (isNil(this.asset.nasaAssetId) || this.asset.nasaAssetId == DefaultNasaAssetId) {
      throw new ValidationError('nasaAsset', 'Nasa asset must be selected!');
    }

    if (isNil(this.asset.price) || this.asset.price < 0) {
      throw new ValidationError('price', 'Price must be as positive number!');
    }
  }

  private async validateNameUniqueness() {
    const nameIsAlreadyInUse = await this.artService.getEntity(this.asset.name);

    if (nameIsAlreadyInUse) {
      throw new ValidationError('email', 'Email is already in use!');
    }
  }
}
