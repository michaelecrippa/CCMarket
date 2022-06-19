import { httpService } from './httpService';
import { NasaEntityDTO } from '../models/DTOs/nasaDTO.model';
import Response from '../interfaces/apiResponse';

class NasaEntityService {
  async getEntities(): Promise<NasaEntityDTO[]> {
    const response = await httpService.get<Response<NasaEntityDTO[]>>('NasaAssets');
    return response.data;
  }
}

export const  nasaEntityService = new NasaEntityService();