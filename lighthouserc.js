module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      collect: {
        numberOfRuns: 5,
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
      },
      preset: 'lighthouse:recommended',
    },
  },
};
