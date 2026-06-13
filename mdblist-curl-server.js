#!/usr/bin/env node

const http = require('http');
const { execSync } = require('child_process');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  try {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    // Get curl command from query params
    const curlCmd = query.cmd;
    
    if (!curlCmd) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: 'Missing cmd parameter' }));
      return;
    }

    console.log(`[${new Date().toLocaleTimeString()}] Executing: ${curlCmd.substring(0, 80)}...`);

    // Execute curl command
    const output = execSync(curlCmd, { encoding: 'utf-8' });
    
    // Parse the output as JSON
    const jsonData = JSON.parse(output);

    res.writeHead(200);
    res.end(JSON.stringify(jsonData));

  } catch (error) {
    console.error('Error:', error.message);
    res.writeHead(500);
    res.end(JSON.stringify({ error: error.message }));
  }
});

server.listen(PORT, 'localhost', () => {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🎬 MDBlists Curl Server Running                        ║
║                                                           ║
║   URL: http://localhost:${PORT}                           ║
║                                                           ║
║   Ready to fetch MDBlists data automatically!            ║
║                                                           ║
║   Press Ctrl+C to stop                                   ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);
});

process.on('SIGINT', () => {
  console.log('\n✓ Server stopped');
  process.exit(0);
});
