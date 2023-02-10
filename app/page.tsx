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
  // const res = await fetch('/api/todos');
  const res = await fetch('https://api.sampleapis.com/coffee/hot');
  return res.json();
}

const Page = async () => {
  const data: DataProps[] = await getData();

  const Coffee = () => (
    <ul>
      {data.map(item => (
        <li key={item.id.toString()}>{item.title}</li>
      ))}
    </ul>
  );

  return (
    <Container>
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
