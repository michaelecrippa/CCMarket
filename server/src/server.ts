import App from '@/app';

import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import ArtAssetRoute from '@routes/artAsset.route';
import NasaAssetRoute from './routes/nasaAsset.route';

import validateEnv from '@utils/validateEnv';

validateEnv();

// eslint-disable-next-line prettier/prettier
const app = new App([
  new IndexRoute(), 
  new UsersRoute(), 
  new AuthRoute(), 
  new ArtAssetRoute(), 
  new NasaAssetRoute(),
]);

app.listen();
