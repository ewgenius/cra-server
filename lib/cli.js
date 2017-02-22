#!/usr/bin/env node
"use strict";
const server_1 = require("./server");
const PORT = process.env.PORT || 3000;
const PROXY_PREFIX = process.env.PROXY_PREFIX || '';
const PROXY_URL = process.env.PROXY_URL || 'https://localhost:5000';
const STATIC_DIR = process.env.STATIC_DIR || './build';
server_1.createServer({
    port: PORT,
    proxyPrefix: PROXY_PREFIX,
    proxyUrl: PROXY_URL,
    staticDir: STATIC_DIR
});
