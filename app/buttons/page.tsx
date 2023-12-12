import { Metadata, NextPage } from 'next';
import Button from '../../components/Atoms/Button/Button';

export const metaData: Metadata = {
  title: 'Button UI',
  description: 'Generated by create next app'
}

const Page: NextPage = () => {
  return (
    <Button>Primary</Button>
  )
}

export default Page;
