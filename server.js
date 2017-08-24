/* eslint-env node */
const FastBootAppServer = require('fastboot-app-server');

let server = new FastBootAppServer({
  distPath: 'dist',
  gzip: true, // Optional - Enables gzip compression.
  host: '0.0.0.0', // Optional - Sets the host the server listens on.
  port: 3000 // Optional - Sets the port the server listens on (defaults to the PORT env var or 3000).
});

server.start();