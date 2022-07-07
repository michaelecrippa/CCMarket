import { Button } from '@mui/material';
import PagesUriConstnts from '../constants/uriConstants';
import { Box } from '@mui/material';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { AssetContainer } from '../components/assetContainer.component';

export function Home() {
  return (
    <Box flexDirection="column">
      <Header />
      <Banner>
        <Button variant="contained" href={PagesUriConstnts.UploadUri}>
          Upload Art
        </Button>
        <Button variant="contained" href={PagesUriConstnts.ProfileUri}>
          My Profile
        </Button>
      </Banner>
      {/* TODO: Fetch assets */}
      <AssetContainer assets={[]} />
    </Box>
  );
}
