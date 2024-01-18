module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start',
      startServerReadyPattern: 'ready on',
      url: ['http://localhost:3000'],
      settings: {
        onlyCategories: [
          'performance',
          'accessibility',
          'best-practices',
          'seo',
        ],
        skipAudits: ['uses-http2'],
        chromeFlags: '--no-sandbox',
        extraHeaders: JSON.stringify({
          Cookie: 'customCookie=1;foo=bar',
        }),
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'themed-omnibox': 'off',
        'splash-screen': 'off',
        'service-worker': 'off',
        'content-width': 'off',
        'csp-xss': 'off',
        'installable-manifest': 'off',
        'maskable-icon': 'off',
        'bf-cache': 'off',
        'unused-css-rules': 'off',

        // performance 카테고리 점수가 70점 미만이면 warning
        'categories:performance': [
          'warn',
          { minScore: 0.7 },
          'error',
          { minScore: 0.5 },
        ],
        // accessibility 가 70점 미만이면 error
        'categories:accessibility': ['error', { minScore: 0.7 }],
        // seo 가 70점 미만이면 error
        'categories:seo': ['error', { minScore: 0.7 }],
        // best-practices 가 70점 미만이면 error
        'categories:best-practices': [
          'error',
          { minScore: 0.7, aggregationMethod: 'pessimistic' },
        ],
      },
      preset: 'lighthouse:recommended',
    },
  },
};
