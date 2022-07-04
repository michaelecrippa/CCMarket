import { Router } from 'express';
import NasaController from '@/controllers/nasa.controller';
import { Routes } from '@interfaces/routes.interface';
import { authMiddleware } from '@/middlewares/auth.middleware';

class NasaAssetRoute implements Routes {
  public path = '/';
  public router = Router();
  public nasaController = new NasaController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}NasaAssets`, authMiddleware, this.nasaController.getAssets);
  }
}

export default NasaAssetRoute;
