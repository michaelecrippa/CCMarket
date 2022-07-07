import { nasaEntityService } from '../services/nasaEntityService';
import { NasaEntityDTO } from '../models/DTOs/nasaDTO.model';
import { Loading } from './Loading';
import { NasaAssetSelectionState, NasaAssetSelectionProps } from '../interfaces/components/NasaAssetSelection';

import { TextField, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';

const defaultNasaEntity: NasaEntityDTO = {
  id: 0,
  name: 'Select NASA entity',
  description: 'default value',
};

export default function NasaAssetSelection({ onClick, artEntityProp }: NasaAssetSelectionProps) {
  const [componentState, setComponentState] = useState<NasaAssetSelectionState>({
    availableNasaEntities: [],
    loading: true,
    error: undefined,
  });

  const getNasaEntities = async () => {
    try {
      const nasaEntities = await nasaEntityService.getEntities();

      nasaEntities.unshift(defaultNasaEntity);
      setComponentState({ availableNasaEntities: nasaEntities, loading: false, error: undefined });
    } catch (exception) {
      setComponentState({ availableNasaEntities: [], loading: false, error: exception });
    }
  };

  useEffect(() => {
    getNasaEntities();
  }, []);

  return (
    <Loading loading={componentState.loading} error={componentState.error}>
      <TextField required select label="NasaAssets" onChange={onClick} value={artEntityProp}>
        {componentState.availableNasaEntities.map((asset: NasaEntityDTO) => (
          <MenuItem key={asset.id} value={asset.id}>
            {asset.name}
          </MenuItem>
        ))}
      </TextField>
    </Loading>
  );
}
