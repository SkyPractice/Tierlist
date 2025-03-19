const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // The path to your backend API
    createProxyMiddleware({
      target: 'https://your-backend-url.com',
      changeOrigin: true,
      secure: false,  // This allows invalid SSL certificates (not recommended for production)
    })
  );
};
