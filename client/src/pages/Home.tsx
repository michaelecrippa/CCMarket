import { Box } from '@mui/material';
import { Banner } from '../components/Banner';
import { EntityCollection } from '../components/EntityCollection';
import { Header } from '../components/Header';

const entities = [
  {
    id: '1',
    name: 'Entity1',
    imageUrl: 'https://safeharborrecovery.com/wp-content/uploads/2020/12/What-is-Pink-Cloud-Syndrome.jpg',
    authorName: 'Autor Autorious',
    ownerName: '',
    description: 'The first entity ever!',
  },
  {
    id: '2',
    name: 'Entity2',
    imageUrl: 'https://safeharborrecovery.com/wp-content/uploads/2020/12/What-is-Pink-Cloud-Syndrome.jpg',
    authorName: 'Autor Autorious',
    ownerName: '',
    description: 'The first entity ever!',
  },
  {
    id: '3',
    name: 'Entity3',
    imageUrl: 'https://safeharborrecovery.com/wp-content/uploads/2020/12/What-is-Pink-Cloud-Syndrome.jpg',
    authorName: 'Autor Autorious',
    ownerName: '',
    description: 'The first entity ever!',
  },
  {
    id: '4',
    name: 'Entity4',
    imageUrl: 'https://safeharborrecovery.com/wp-content/uploads/2020/12/What-is-Pink-Cloud-Syndrome.jpg',
    authorName: 'Autor Autorious',
    ownerName: '',
    description: 'The first entity ever!',
  },
  {
    id: '5',
    name: 'Entity5',
    imageUrl: 'https://safeharborrecovery.com/wp-content/uploads/2020/12/What-is-Pink-Cloud-Syndrome.jpg',
    authorName: 'Autor Autorious',
    ownerName: '',
    description: 'The first entity ever!',
  },
  {
    id: '6',
    name: 'Entity6',
    imageUrl: 'https://safeharborrecovery.com/wp-content/uploads/2020/12/What-is-Pink-Cloud-Syndrome.jpg',
    authorName: 'Autor Autorious',
    ownerName: '',
    description: 'The first entity ever!',
  },
  {
    id: '7',
    name: 'Entity7',
    imageUrl: 'https://safeharborrecovery.com/wp-content/uploads/2020/12/What-is-Pink-Cloud-Syndrome.jpg',
    authorName: 'Autor Autorious',
    ownerName: '',
    description: 'The first entity ever!',
  },
  {
    id: '8',
    name: 'Entity8',
    imageUrl: 'https://safeharborrecovery.com/wp-content/uploads/2020/12/What-is-Pink-Cloud-Syndrome.jpg',
    authorName: 'Autor Autorious',
    ownerName: '',
    description: 'The first entity ever!',
  },
  {
    id: '9',
    name: 'Entity9',
    imageUrl: 'https://safeharborrecovery.com/wp-content/uploads/2020/12/What-is-Pink-Cloud-Syndrome.jpg',
    authorName: 'Autor Autorious',
    ownerName: '',
    description: 'The first entity ever!',
  },
];

export function Home() {
  return (
    <Box flexDirection="column">
      <Header />
      <Banner />
      <EntityCollection entities={entities} />
    </Box>
  );
}
