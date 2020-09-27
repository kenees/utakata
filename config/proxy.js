module.exports = {
  '/api': {
    target: 'http://127.0.0.1:5000',
    pathRewrite: { '^/api': '/api' },
    changeOrigin: true
  },
  '/cloud': {
    target: 'https://api.imjad.cn',
    pathRewrite: { '^/cloud': '/cloudmusic'},
    changeOrigin: true,
  }
};

