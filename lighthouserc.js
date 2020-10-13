module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: ['http://localhost/index.html'],
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'unused-javascript': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
