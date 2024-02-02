import { queryFetchMainCharacter } from '@/api/queries/main';
import ViewComponent from '@/app/auth/signin/view';
import HydratePage from '@/components/basic/HydratePage';
import getQueryClient from '@/utils/query/getQueryClient';

const SignIn = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    ...queryFetchMainCharacter(),
  });

  return (
    <HydratePage queryClient={queryClient}>
      <ViewComponent />
    </HydratePage>
  );
};
export default SignIn;
