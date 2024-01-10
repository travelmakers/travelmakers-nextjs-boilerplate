import { queryFetchMainCharacter } from '@/api/queries/main';
import HomeComponent from '@/app/view';
import HydratePage from '@/components/basic/HydratePage';
import getQueryClient from '@/utils/query/getQueryClient';

const Home = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    ...queryFetchMainCharacter(),
  });

  return (
    <HydratePage queryClient={queryClient}>
      <HomeComponent />
    </HydratePage>
  );
};

export default Home;
