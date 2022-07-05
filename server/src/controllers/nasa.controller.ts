import { NextFunction, Request, Response } from 'express';

import NasaAssetService from '@/services/nasaAsset.service';
import { NasaAssetDTO } from '@/dtos/nasaAsset.dto';

class NasaController {
  private nasaService: NasaAssetService;

  constructor() {
    this.nasaService = new NasaAssetService();
  }

  public getAssets = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
      const nasaAssets = await this.nasaService.getAssets();
      const nasaAssetsDTOs = nasaAssets.map(
        nasaAsset =>
          <NasaAssetDTO>{
            id: nasaAsset.id,
            name: nasaAsset.name,
            description: nasaAsset.description,
          },
      );

      response.status(200).json({ data: nasaAssetsDTOs, message: 'Availabe nasa assets' });
    } catch (error) {
      next(error);
    }
  };
}

export default NasaController;
