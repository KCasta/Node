// const http = require("http");
// http
//   .createServer(function (request, response) {
//     // Send the HTTP header
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, { "Content-Type": "text/plain" });

//     // Send the response body as "Hello World"
//     response.end("Hello World\n");
//   })
//   .listen(8081);
// console.log("Hello World");

// to create a server
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status and content type
  res.writeHead(200, { "Content-Type": "text/html" });

  // Send the response body
  res.end("<h1>Hello Node!!!!</h1>\n");
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

const fileSytem = require("fs");

fileSytem.readFile("./welcome.txt", "utf-8", (error, data) => {
  console.log(data.toString());
});
