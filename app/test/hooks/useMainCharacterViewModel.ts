import { queryFetchMainCharacter } from '@/api/queries/main';
import { useUserInfoStore } from '@/stores/useUserInfoStore';
import { useSuspenseQuery } from '@tanstack/react-query';

const useMainCharacterViewModel = () => {
  const { data: dataMainCharacter } = useSuspenseQuery({
    ...queryFetchMainCharacter(),
  });
  const userStore = useUserInfoStore();

  return {
    dataMainCharacter,
    userStore,
  };
};

export default useMainCharacterViewModel;
