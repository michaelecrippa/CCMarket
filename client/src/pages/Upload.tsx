import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { 
  Container, 
  CircularProgress, 
  FormControl, 
  FormGroup, 
  InputLabel, 
  OutlinedInput, 
  Input, 
  FormHelperText, 
  Button, 
  TextField, 
  InputAdornment, 
} from '@mui/material';

import NasaAssetSelection from '../components/nasaAssetSelection.component';

import { artEntityService } from '../services/artEntityService';
import { ArtEntityDTO } from '../models/DTOs/artDTO.model';

import PagesUriConstnts from '../constants/uriConstants';

export default function Upload(): JSX.Element {
  const [entityData, setEntityData] = useState(new ArtEntityDTO());
  const navigate = useNavigate();

  const handleEntityDataChange =
  (prop: keyof ArtEntityDTO) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntityData({ ...entityData, [prop]: event.target.value });
  };

  async function createEntity(event: FormEvent) {
    event.preventDefault();

    await artEntityService.createEntity(entityData)
    .then(() => navigate(PagesUriConstnts.IndexUri));
  }

  return(
    <Container maxWidth="sm">
      <Button variant="contained" onClick={() => navigate(-1)}>
        Back
      </Button>
      <form onSubmit={createEntity}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            {/* Add Name uniqueness validation */}
            <TextField 
              required 
              name="entity-name" 
              placeholder="Name"
              value={entityData.name}
              onChange={handleEntityDataChange('name')}
            />
          </FormGroup>
          <FormControl>
            <FormGroup>
              <InputLabel>Amount</InputLabel>
              <OutlinedInput
                required 
                value={entityData.price}
                type="number" 
                onChange={handleEntityDataChange('price')}
                inputProps={{min: 0}} 
                name="entity-price"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />         
              <FormHelperText>Note: Price can be updated later</FormHelperText>
            </FormGroup>
          </FormControl>
          <FormGroup>
            <Input disabled={true} required type="file" />
            {/* File preview would be nice */}
          </FormGroup>
          <FormGroup>
            <TextField
              label="Description"
              value={entityData.description}
              inputProps={{
                maxLength: 144,
              }}
              onChange={handleEntityDataChange('description')} 
            />
          </FormGroup>
          <FormGroup>
            <NasaAssetSelection onClick={handleEntityDataChange('nasaAssetId')} artEntityProp={entityData.nasaAssetId}/>
          </FormGroup>
          {/* Disable when invalid DTO */}
          <Button type="submit" variant="contained" disabled={false}>
            {false ? <CircularProgress /> : 'Upload and list to the market'}
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
