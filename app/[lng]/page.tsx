import { fetchMain } from '@/api/domain/main';
import { useTranslation } from '@/lib/i18n';
import { Metadata } from 'next';

import { Container } from './styles';

async function getData() {
  const data = await fetchMain();
  return data;
}

interface Props {
  params: {
    lng: string;
  };
}

export async function generateMetadata({
  params: { lng },
}: Props): Promise<Metadata> {
  const { t } = await useTranslation(lng, 'seo');

  return {
    title: `호텔에삶｜${t('mypage')}1124242`,
  };
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
      <Coffee />
    </Container>
  );
};

export default Page;
