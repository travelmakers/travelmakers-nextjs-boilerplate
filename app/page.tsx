import { basicFetch } from '@/api/fetchFunctions';
import Image from '@/ui/Image';
import React from 'react';

import { Container } from './styles';

interface DataProps {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
}

async function getData() {
  const data = await basicFetch<DataProps[]>(
    'https://api.sampleapis.com/coffee/hot'
  );
  return data;
}

const Page = async () => {
  const data = await getData();

  const Coffee = () => (
    <ul>
      {data.map(item => (
        <li key={item.id.toString()}>{item.title}</li>
      ))}
    </ul>
  );

  return (
    <Container>
      <span>sgd</span>
      <Image
        src="/resource/main/banners/20230120/web/zzZKimZpn6EYWQ4irQJhmEG5ZI2R6UGjNPdeK7FP.jpg"
        width={500}
        height={500}
        alt="11"
      />
      <Coffee />
    </Container>
  );
};

export default Page;
