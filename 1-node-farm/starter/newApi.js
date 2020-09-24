const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const path = req.url;
  if (path == "/overview" || path == "/") {
    res.end("THIS IS A OVERVIEW");
  } else if (path == "/products") {
    res.end("These are products");
  } else if (path == "/api") {
    res.end("These are api calls");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Not Found</h1>");
  }
});
server.listen(8080, () => {
  console.log("Server listening to port 8080");
});
