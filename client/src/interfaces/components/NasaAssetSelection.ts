import { NasaEntityDTO } from "../../models/DTOs/nasaDTO.model";

export interface NasaAssetSelectionProps {
  onClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  artEntityProp: number;
}
  
export interface NasaAssetSelectionState {
  availableNasaEntities: NasaEntityDTO[];
  loading: boolean;
  error: any;
}
