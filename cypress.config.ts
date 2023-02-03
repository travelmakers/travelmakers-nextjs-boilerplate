import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'gy4rf2',
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
