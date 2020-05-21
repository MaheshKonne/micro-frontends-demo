const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
var morgan = require('morgan')

const app = express();

app.use(morgan('combined'));
app.use('/mf-one', createProxyMiddleware({ target: 'http://localhost:3001/', changeOrigin: true, pathRewrite: { '^/one': '/' }}));
app.use('/mf-two', createProxyMiddleware({ target: 'http://localhost:3002/', changeOrigin: true, pathRewrite: { '^/two': '/' }}));

app.listen(process.env.PORT || 8000);
