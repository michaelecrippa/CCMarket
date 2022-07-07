import { Router } from 'express';
import ArtController from '@/controllers/art.controller';
import { Routes } from '@interfaces/routes.interface';
import { authMiddleware } from '@/middlewares/auth.middleware';

class ArtAssetRoute implements Routes {
  public path = '/';
  public router = Router();
  public artController = new ArtController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}uploadArt`, authMiddleware, this.artController.uploadArt);
  }
}

export default ArtAssetRoute;
