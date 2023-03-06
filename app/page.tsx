import { fetchMain } from '@/api/domain/travelmakers';
import Image from '@/ui/Image';
import React from 'react';

import { Container } from './styles';

async function getData() {
  const data = await fetchMain();
  return data;
}

const Page = async () => {
  const data = await getData();

  const Coffee = () => (
    <ul>
      {data.banners?.map(item => (
        <li key={item.hotel_id?.toString()}>{item.name}</li>
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
