#!/usr/bin/env node
"use strict";
const PORT = process.env.PORT || 3000;
const PROXY_PREFIX = process.env.PROXY_PREFIX || '';
const PROXY_URL = process.env.PROXY_URL || 'https://localhost:5000';
const STATIC_DIR = process.env.STATIC_DIR || './build';
