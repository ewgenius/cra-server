#!/usr/bin/env node
"use strict";
const server_1 = require("./server");
const path = require("path");
const program = require("commander");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const packjson = require('../package.json');
const cwd = process.cwd();
const PORT = process.env.PORT || 3000;
const STATIC_DIR = process.env.STATIC_DIR || './build';
const PROXY_PREFIX = process.env.PROXY_PREFIX || '';
const PROXY_URL = process.env.PROXY_URL;
program
    .version(packjson.version)
    .option('-p, --port <port>', 'specify port', PORT)
    .option('-d, --dir <static-directory>', 'specify contents dir', STATIC_DIR)
    .option('-url, --proxy-url <proxy-url>', 'specify proxy url', PROXY_URL)
    .option('-prefix, --proxy-prefix <proxy-prefix>', 'specify proxy prefix', PROXY_PREFIX)
    .parse(process.argv);
const args = program;
server_1.createServer({
    port: parseInt(args.port),
    staticDir: path.resolve(cwd, args.dir),
    proxyPrefix: args.proxyPrefix,
    proxyUrl: args.proxyUrl
});
