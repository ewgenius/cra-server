#!/usr/bin/env node
"use strict";
const server_1 = require("./server");
const path = require("path");
const program = require("commander");
const packjson = require('../package.json');
const cwd = process.cwd();
const PORT = 3000;
const PROXY_PREFIX = '/';
const STATIC_DIR = './build';
program
    .version(packjson.version)
    .option('-p, --port <port>', 'specify port', PORT)
    .option('-d, --dir <static_dir>', 'specify contents dit', STATIC_DIR)
    .option('-url, --proxy-url <proxy-url>', 'specify proxy prefix', null)
    .option('-prefix, --proxy-prefix <proxy-prefix>', 'specify proxy prefix', PROXY_PREFIX)
    .parse(process.argv);
const args = program;
server_1.createServer({
    port: parseInt(args.port),
    staticDir: path.resolve(cwd, args.dir),
    proxyPrefix: args.proxyPrefix,
    proxyUrl: args.proxyUrl
});
