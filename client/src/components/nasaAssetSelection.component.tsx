import { nasaEntityService } from '../services/nasaEntityService';
import { NasaEntityDTO } from '../models/DTOs/nasa-dto.model';
import { Loading } from './loading';
import { useAsync } from '../hooks/useAsync';

import {
  TextField,
  MenuItem, 
} from '@mui/material';

interface NasaAssetSelectionProps {
  onClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function NasaAssetSelection({ onClick } : NasaAssetSelectionProps) {
  console.log('ent');
  const { data: nasaAssets, error, loading } = 
    useAsync<NasaEntityDTO[]>(() => nasaEntityService.getEntities(), []);
  return (
    <Loading loading={loading} error={error}>
      <TextField
        select
        label="NasaAsset"
        onChange={onClick}
      >
        {
          nasaAssets ?
          nasaAssets.map(
            (asset: NasaEntityDTO) => <MenuItem value={asset.id}>{asset.name}</MenuItem>
          ) : <MenuItem></MenuItem>
        }
      </TextField>
    </Loading>
  )
}