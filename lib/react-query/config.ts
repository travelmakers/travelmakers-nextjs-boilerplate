import type { QueryClientConfig } from '@tanstack/react-query';

const config: QueryClientConfig = {
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus 는 데이터가 stale 상태일 경우 윈도우 포커싱 될 때 마다 refetch를 실행하는 옵션이다.
      refetchOnWindowFocus: true,
      staleTime: 5 * 60 * 1000, // 5분
    },
  },
};

export default config;
