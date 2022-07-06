import { Button } from '@mui/material';
import PagesUriConstnts from '../constants/uriConstants';

export default function Home() {
  return (
    <div className="App">
      <Button variant="contained" href={PagesUriConstnts.UploadUri}>
        Upload Art
      </Button>
    </div>
  )
}
