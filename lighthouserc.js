module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      collect: {
        numberOfRuns: 1,
      },
    },
    upload: {
      startServerCommand: 'npm run start',
      target: 'temporary-public-storage',
      // target: 'filesystem',
      // outputDir: './lhci_reports',
      // reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
    },
    assert: {
      assertions: {
        'categories:pwa': 'off',
        'themed-omnibox': 'off',
        'tap-targets': 'off',
        'splash-screen': 'off',
        'service-worker': 'off',
        'meta-viewport': 'off',
        'content-width': 'off',
        'csp-xss': 'off',
        'font-size': 'off',
        'installable-manifest': 'off',
        'valid-source-maps': 'off',
        'maskable-icon': 'off',
        'total-byte-weight': 'off',
        'unminified-javascript': 'off',
        'unused-javascript': 'off',
        'apple-touch-icon': 'off',
        'document-title': 'off',
        'errors-in-console': 'off',
        'html-has-lang': 'off',
        viewport: 'off',
      },
      preset: 'lighthouse:recommended',
    },
  },
};
