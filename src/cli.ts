#!/usr/bin/env node

import { createServer, ServerConfig } from './server';
import * as path from 'path';

const cwd = process.cwd();

const PORT = process.env.PORT || 3000;
const PROXY_PREFIX = process.env.PROXY_PREFIX || '/';
const PROXY_URL = process.env.PROXY_URL;
const STATIC_DIR = process.env.STATIC_DIR || './build';

createServer({
  port: PORT,
  proxyPrefix: PROXY_PREFIX,
  proxyUrl: PROXY_URL,
  staticDir: path.resolve(cwd, STATIC_DIR)
});
