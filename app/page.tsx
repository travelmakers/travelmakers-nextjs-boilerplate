import { fetchMainCharacter } from '@/api/domains/main';
import HomeComponent from '@/app/view';
import HydratePage from '@/components/basic/HydratePage';
import getQueryClient from '@/utils/query/getQueryClient';

const Home = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['fetchMainCharacter'],
    queryFn: async () => {
      const result = await fetchMainCharacter();
      return result;
    },
  });

  return (
    <HydratePage queryClient={queryClient}>
      <HomeComponent />
    </HydratePage>
  );
};

export default Home;
