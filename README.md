# CRA Server

Simple express static server with opt-in proxy.

## How to

```
npm install --save-dev cra-server
```

add in yout package.json:

```
...
"scripts": {
  ...
  "serve": "cra-server"
  ...
}
```

use env variables

```
PORT=3000
STATIC_DIR=build
PROXY_PREFIX=/api
PROXY_URL=http://<api-server>
```

or as cli tool

```
cra-server -p 3000 -d ./build
```

- -p, --port <port> - specify port, by default is 3000
- -d, --dir <static-directory> - by default is ./build
- -url, --proxy-url <proxy-url> - specify proxy url', optional
- -prefix, --proxy-prefix <proxy-prefix> - specify proxy prefix, optional
