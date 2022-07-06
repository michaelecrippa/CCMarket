import { httpService } from './httpService';
import { NasaEntityDTO } from '../models/DTOs/nasaDTO.model';

class NasaEntityService {
  async getEntities(): Promise<NasaEntityDTO[]> {
    return await httpService.get<NasaEntityDTO[]>('NasaAssets');
  }
}

export const  nasaEntityService = new NasaEntityService();