const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
	app.use(createProxyMiddleware('/api', {
		target: 'http://172.16.20.43:9091/',
		changeOrigin: true,
		pathRewrite: {
			'^/': '',  //因为后端接口没有api前缀，所以这里重写（去掉前缀/api）
		}
	}))
}
