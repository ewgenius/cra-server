"use strict";
const express = require("express");
const request = require("request");
const url = require("url");
console.log(process.argv);
function createServer(config = {
        port: 3000,
        proxyPrefix: '',
        staticDir: './build'
    }) {
    const { port, proxyPrefix, proxyUrl, staticDir } = config;
    const app = express();
    app.use(express.static(staticDir));
    if (proxyUrl) {
        app.all(`/${proxyPrefix}/*`, (req, res) => {
            const pipeUrl = proxyPrefix + url.parse(req.url, true).path;
            try {
                req.pipe(request(pipeUrl)).pipe(res);
            }
            catch (e) {
                res.statusCode = 500;
                res.end();
            }
        });
    }
    const server = app.listen({
        port
    }, () => {
        console.log(`server is ready on ${server.address().port}`);
    });
    return server;
}
exports.createServer = createServer;
