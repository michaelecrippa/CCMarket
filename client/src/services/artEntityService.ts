import { httpService } from './httpService';
import { ArtEntityDTO } from '../models/DTOs/art-dto.model';

class ArtEntityService {
  createEntity(entityInput: ArtEntityDTO): Promise<boolean> {
    return httpService.post<boolean>('uploadArt', entityInput);
  }
}
  
export const artEntityService = new ArtEntityService();