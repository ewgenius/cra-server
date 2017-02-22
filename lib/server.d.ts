/// <reference types="node" />
import { Server } from 'http';
export interface ServerConfig {
    port?: number;
    staticDir?: string;
    proxyPrefix?: string;
    proxyUrl?: string;
}
export declare function createServer(config?: ServerConfig): Server;
