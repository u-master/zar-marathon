/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import Hapi from '@hapi/hapi';
import HapiInert from '@hapi/inert';
import React from 'react';
import ReactDom from 'react-dom/server';
import { setPath } from 'hookrouter';
import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';
import App from '../App';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register(HapiInert);

  server.route({
    method: 'GET',
    path: '/main.js',
    handler: (request, h) => h.file(path.join(process.cwd(), 'dist', 'main.js')),
  });

  server.route({
    method: 'GET',
    path: '/{any*}',
    handler: (request) => {
      console.log(request.path);
      setPath(request.path);
      const pathIndexHtml = path.join(process.cwd(), 'dist', 'index.html');
      const template = handlebars.compile(fs.readFileSync(pathIndexHtml, 'utf8'));
      const content = ReactDom.renderToString(<App />);
      const page = template({ content });
      return page;
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
