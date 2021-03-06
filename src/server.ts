import * as express from 'express';
import { Server } from 'http';
import * as request from 'request';
import * as url from 'url';

export interface ServerConfig {
  port?: number;
  staticDir?: string;
  proxyPrefix?: string;
  proxyUrl?: string;
}

function cutPrefix(prefix: string, urlPath: string): string {
  if (prefix.length > 0) {
    if (urlPath.substr(0, prefix.length) === prefix) {
      return urlPath.substr(prefix.length);
    } else {
      return urlPath;
    }
  } else {
    return urlPath;
  }
}

export function createServer(config: ServerConfig = {
  port: 3000,
  proxyPrefix: '',
  staticDir: './build'
}): Server {
  const {port, proxyPrefix, proxyUrl, staticDir} = config;

  const app = express();

  app.use(express.static(staticDir));

  if (proxyUrl) {
    app.all(`${proxyPrefix}/*`, (req, res) => {
      const urlPath = url.parse(req.url, true).path;
      const pipeUrl = proxyUrl + cutPrefix(proxyPrefix, urlPath);
      try {
        console.log(`${req.method}: ${req.url} => ${pipeUrl}`);
        req.pipe(request(pipeUrl)).pipe(res);
      } catch (e) {
        res.statusCode = 500;
        res.end();
      }
    });
  }

  const server = app.listen({
    port
  }, () => {
    console.log(`server is ready on port ${server.address().port}`);
    console.log(`serving static assets from ${config.staticDir}`);
    if (proxyUrl) {
      console.log(`proxing all requests from ${config.proxyUrl} with prefix ${config.proxyPrefix}`);
      console.log(`http://localhost:${server.address().port}${config.proxyPrefix}/<request_endpoint> => ${config.proxyUrl}/<request_endpoint>`);
    }
  });

  return server;
}
