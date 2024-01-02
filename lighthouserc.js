module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            startServerReadyPattern: 'ready on',
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
                'meta-description': 'off',
                'html-has-lang': 'off',
                'robots-txt': 'off',
                viewport: 'off',
                // performance 카테고리 점수가 70점 미만이면 warning
                'categories:performance': ['warn', { minScore: 0.7 }],
                // accessibility 가 60점 미만이면 error
                'categories:accessibility': ['error', { minScore: 0.5 }],
                // seo 가 50점 미만이면 error
                'categories:seo': ['error', { minScore: 0.5 }],
            },
            preset: 'lighthouse:recommended',
        },
    },
};