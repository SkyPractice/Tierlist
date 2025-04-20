import createProxyMiddleware from 'http-proxy-middleware';
module.exports = function (app) {
  app.use(
    '/api',  // The path to your backend API
    createProxyMiddleware({
      target: 'https://skypractice.xyz:25622',
      changeOrigin: true,
      secure: false,  // This allows invalid SSL certificates (not recommended for production)
    })
  );
};
