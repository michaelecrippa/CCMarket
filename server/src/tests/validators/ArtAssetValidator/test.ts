import { ArtAssetValidator } from '../../../validators/artAssetValidator';
import { ValidationError } from '../../../exceptions/ValidationException';
import { ArtAssetDTO } from '../../../dtos/artAsset.dto';
import { DefaultNasaAssetId } from '../../../constants/NasaAssetConstants';

test('Validate undefined input throws', () => {
  const validator = new ArtAssetValidator(undefined);
  expect(validator).toBeDefined();

  expect(() => validator.validateNewEntity()).toThrowError(ValidationError);
});

test('Validate empty name throws', () => {
  const artAssetInput = new ArtAssetDTO();

  let validator = new ArtAssetValidator(artAssetInput);
  expect(validator).toBeDefined();

  expect(() => validator.validateNewEntity()).toThrowError(ValidationError);
  artAssetInput.name = '';
  validator = new ArtAssetValidator(artAssetInput);
  expect(() => validator.validateNewEntity()).toThrowError(ValidationError);
});

test('Validate too long name throws', () => {
  const artAssetInput = new ArtAssetDTO();
  // eslint-disable-next-line prettier/prettier
  artAssetInput.name = 'VPQpSI7s3JZ5DxeUj7AjEBWX4TVoj6wS3u1NqfxBvC0TdEZ1ci0kouEtcMAi17WHEpX8X59UYQYaaK4AXUJhe2v4a1NmF7PUsfKFE';

  const validator = new ArtAssetValidator(artAssetInput);
  expect(validator).toBeDefined();
  expect(() => validator.validateNewEntity()).toThrowError(ValidationError);
});

test('Validate empty or undefined related nasaAssetId throws', () => {
  const artAssetInput = new ArtAssetDTO();
  artAssetInput.name = 'artName';

  let validator = new ArtAssetValidator(artAssetInput);
  expect(validator).toBeDefined();
  expect(() => validator.validateNewEntity()).toThrowError(ValidationError);

  artAssetInput.nasaAssetId = DefaultNasaAssetId;
  validator = new ArtAssetValidator(artAssetInput);
  expect(() => validator.validateNewEntity()).toThrowError(ValidationError);
});

test('Validate invalid price throws', () => {
  const artAssetInput = new ArtAssetDTO();
  artAssetInput.name = 'artAssetDTO';
  const validNasaAssetId = 1;
  artAssetInput.nasaAssetId = validNasaAssetId;

  let validator = new ArtAssetValidator(artAssetInput);
  expect(validator).toBeDefined();
  expect(() => validator.validateNewEntity()).toThrowError(ValidationError);

  artAssetInput.price = -1;
  validator = new ArtAssetValidator(artAssetInput);
  expect(() => validator.validateNewEntity()).toThrowError(ValidationError);
});

//TODO
//test('Validate name already in use throws', () => {})
