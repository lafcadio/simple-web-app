'use strict';

const express = require('express');
const os = require("os");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
const hostname = os.hostname();
app.get('/', (req, res) => {
  res.send('<html><body>Hello from host: ' + hostname + '</body></html>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
