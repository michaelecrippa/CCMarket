import { NextFunction, Request, Response } from 'express';

import ArtService from '@/services/art.service';
import { ArtAssetDTO } from '@/dtos/artAsset.dto';
import { ArtAssetValidator } from '@/validators/artAssetValidator';

import { HttpException } from '@exceptions/HttpException';
import { ValidationError } from '@exceptions/ValidationException';

class ArtController {
  private artService: ArtService;

  constructor() {
    this.artService = new ArtService();
  }

  public uploadArt = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
      const user = undefined; //get current user from context/session
      const artAssetData: ArtAssetDTO = request.body;
      try {
        const artAssetValidator = new ArtAssetValidator(artAssetData);
        artAssetValidator.validateNewEntity();
      } catch (exception) {
        const e: ValidationError = exception;
        throw new HttpException(409, e.message);
      }

      await this.artService.createEntity(artAssetData, user);
      response.status(201).json({ message: 'Entity uploaded successfully' });
    } catch (error) {
      next(error);
    }
  };
}

export default ArtController;
