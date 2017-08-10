const http = require('http');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const fetch = require('node-fetch');

(function initWebpack() {
	const webpack = require('webpack');
	const webpackConfig = require('./webpack/common.config');
	const compiler = webpack(webpackConfig);

	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true, publicPath: webpackConfig.output.publicPath,
	}));

	app.use(require('webpack-hot-middleware')(compiler, {
		log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
	}));

	app.use(express.static(__dirname + '/'));

	app.use(bodyParser.json()); // for parsing application/json
})();

app.post('/deezer-api', function root(req, res) {
	fetch(req.body.url)
		.then(response => response.json())
		.then(json => res.json(json))
});

app.get(/.*/, function root(req, res) {
	res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3020, function onListen() {
	const address = server.address();
	console.log('Listening on: %j', address);
	console.log(' -> that probably means: http://localhost:%d', address.port);
});