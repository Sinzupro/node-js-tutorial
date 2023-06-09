// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write(`If you can see this you're connected`)
//     res.end()
// })

// server.listen(500) ///

/// request 

const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end(`If you can see this you're connected`);
  }
  if(req.url === '/about'){
    res.end('we are the universe');
  }

    
})

server.listen(500)