import { queryFetchMainCharacter } from '@/api/queries/main';
import { useUserInfoStore } from '@/stores/useUserInfoStore';
import { useQuery } from '@tanstack/react-query';

const useMainCharacterViewModel = () => {
  const { data: dataMainCharacter } = useQuery({
    ...queryFetchMainCharacter(),
  });
  const userStore = useUserInfoStore();

  return {
    dataMainCharacter,
    userStore,
  };
};

export default useMainCharacterViewModel;
